import React, { useState, useMemo, useCallback } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { Upload, Download, Filter, Search, BarChart3, Users, MapPin, Trophy, AlertCircle, CheckCircle2, XCircle, Trash2 } from 'lucide-react';
import { processLead, type Lead } from './lib/scoring';

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [filterAgency, setFilterAgency] = useState<string>('All');
  const [filterType, setFilterType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  const handleFileUpload = (file: File) => {
    if (file.name.endsWith('.csv')) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const processed = results.data.map(processLead);
          setLeads(prev => [...prev, ...processed]);
        }
      });
    } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        const processed = jsonData.map(processLead);
        setLeads(prev => [...prev, ...processed]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      Array.from(e.dataTransfer.files).forEach(handleFileUpload);
    }
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      // Agency Filter
      if (filterAgency !== 'All' && lead.agence !== filterAgency) return false;
      
      // Type Filter
      if (filterType !== 'All') {
        const typeStr = (lead.typeInstallation || '').toLowerCase();
        if (filterType === 'MT') {
          if (!typeStr.includes('industriel') && lead.refStegValid !== 'MT') return false;
        } else if (filterType === 'Résidentiel') {
          if (!typeStr.includes('résidentiel') && !typeStr.includes('residentiel') && lead.refStegValid !== 'BT') return false;
        } else if (filterType === 'Pompage') {
          if (!typeStr.includes('pompage')) return false;
        }
      }

      // Search Filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          lead.nomPrenom.toLowerCase().includes(searchLower) ||
          lead.email.toLowerCase().includes(searchLower) ||
          lead.telephone.toLowerCase().includes(searchLower) ||
          lead.gouvernoratVille.toLowerCase().includes(searchLower)
        );
      }

      return true;
    }).sort((a, b) => b.score - a.score);
  }, [leads, filterAgency, filterType, searchTerm]);

  // Dashboard KPIs
  const kpis = useMemo(() => {
    const total = filteredLeads.length;
    const highQuality = filteredLeads.filter(l => l.score > 80).length;
    const avgScore = total > 0 ? Math.round(filteredLeads.reduce((acc, l) => acc + l.score, 0) / total) : 0;
    
    // Best Agency
    const agencyCounts: Record<string, number> = {};
    filteredLeads.forEach(l => {
      if (l.agence !== 'Hors Tunisie') {
        agencyCounts[l.agence] = (agencyCounts[l.agence] || 0) + 1;
      }
    });
    let bestAgency = 'N/A';
    let maxCount = 0;
    for (const [agency, count] of Object.entries(agencyCounts)) {
      if (count > maxCount) {
        maxCount = count;
        bestAgency = agency;
      }
    }

    return { total, highQuality, avgScore, bestAgency };
  }, [filteredLeads]);

  const exportData = () => {
    const ws = XLSX.utils.json_to_sheet(filteredLeads.map(l => ({
      'Nom & Prénom': l.nomPrenom,
      'Type': l.typeInstallation,
      'Facture STEG': l.factureSteg,
      'Référence STEG': l.refSteg,
      'Validité STEG': l.refStegValid,
      'Email': l.email,
      'Téléphone': l.telephone,
      'Gouvernorat/Ville': l.gouvernoratVille,
      'Agence Assignée': l.agence,
      'Score': l.score
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leads");
    XLSX.writeFile(wb, "leads_export.xlsx");
  };

  const clearData = () => {
    setLeads([]);
    setShowConfirmClear(false);
  };

  const getScoreColor = (score: number) => {
    if (score > 80) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getRefBadge = (status: string) => {
    if (status === 'MT') return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gamco-orange/20 text-gamco-dark"><CheckCircle2 className="w-3 h-3 mr-1"/> MT</span>;
    if (status === 'BT') return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gamco-red/20 text-gamco-dark"><CheckCircle2 className="w-3 h-3 mr-1"/> BT</span>;
    return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"><XCircle className="w-3 h-3 mr-1"/> Invalide</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        {showConfirmClear && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Effacer les données</h3>
              <p className="text-sm text-gray-500 mb-6">Êtes-vous sûr de vouloir effacer tous les leads importés ? Cette action est irréversible.</p>
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setShowConfirmClear(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button 
                  onClick={clearData}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  Effacer
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end leading-none select-none">
              <div className="text-3xl font-bold tracking-tighter" style={{ background: 'linear-gradient(to right, #B7202E, #E86E34)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                GAMCO
              </div>
              <div className="flex items-start mt-0.5">
                <div className="h-[2px] w-16 bg-gamco-orange mt-1.5 mr-1"></div>
                <span className="text-xl font-light tracking-tight text-gamco-dark leading-none" style={{ fontFamily: 'sans-serif' }}>Energy</span>
                <div className="w-1.5 h-1.5 bg-gamco-dark ml-0.5 mt-0.5"></div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 mx-2 hidden sm:block"></div>
            <h1 className="text-lg font-medium text-gray-500 hidden sm:block">LeadMaster</h1>
          </div>
          <div className="flex items-center gap-4">
            {leads.length > 0 && (
              <button 
                onClick={() => setShowConfirmClear(true)}
                className="inline-flex items-center px-4 py-2 border border-red-200 shadow-sm text-sm font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Effacer les données
              </button>
            )}
            <button 
              onClick={exportData}
              disabled={filteredLeads.length === 0}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Excel
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Dashboard KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-4">
            <div className="p-3 bg-gamco-orange/10 text-gamco-orange rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">{kpis.total}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-4">
            <div className="p-3 bg-gamco-red/10 text-gamco-red rounded-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Leads Chauds (&gt;80)</p>
              <p className="text-2xl font-bold text-gray-900">{kpis.highQuality}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-4">
            <div className="p-3 bg-gamco-dark/10 text-gamco-dark rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Meilleure Agence</p>
              <p className="text-2xl font-bold text-gray-900">{kpis.bestAgency}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-4">
            <div className="p-3 bg-gray-100 text-gray-600 rounded-lg">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Score Moyen</p>
              <p className="text-2xl font-bold text-gray-900">{kpis.avgScore} / 100</p>
            </div>
          </div>
        </div>

        {/* Import Section */}
        <div 
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragging ? 'border-gamco-orange bg-gamco-orange/5' : 'border-gray-300 bg-white hover:border-gray-400'
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className={`p-4 rounded-full ${isDragging ? 'bg-gamco-orange/20 text-gamco-orange' : 'bg-gray-100 text-gray-500'}`}>
              <Upload className="w-8 h-8" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">Glissez-déposez vos fichiers ici</p>
              <p className="text-sm text-gray-500 mt-1">Supporte CSV et Excel (.xlsx, .xls)</p>
            </div>
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-gamco-orange hover:text-gamco-orange/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gamco-orange">
              <span>Ou parcourez vos fichiers</span>
              <input 
                type="file" 
                className="sr-only" 
                accept=".csv,.xlsx,.xls"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    Array.from(e.target.files).forEach(handleFileUpload);
                  }
                }}
              />
            </label>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un lead..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gamco-orange focus:border-gamco-orange sm:text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterAgency}
                onChange={(e) => setFilterAgency(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gamco-orange focus:border-gamco-orange sm:text-sm rounded-md"
              >
                <option value="All">Toutes les agences</option>
                <option value="Tunis">Tunis</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Sousse">Sousse</option>
                <option value="Hors Tunisie">Hors Tunisie</option>
              </select>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gamco-orange focus:border-gamco-orange sm:text-sm rounded-md"
              >
                <option value="All">Tous les types</option>
                <option value="MT">MT (Industriel / 6 chiffres)</option>
                <option value="Résidentiel">Résidentiel (BT / 9 car.)</option>
                <option value="Pompage">Pompage</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localisation</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Détails STEG</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agence</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium border ${getScoreColor(lead.score)}`}>
                          {lead.score} pts
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{lead.nomPrenom || 'N/A'}</div>
                        <div className="text-sm text-gray-500 capitalize">{lead.typeInstallation || 'Non spécifié'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{lead.email || '-'}</div>
                        <div className="text-sm text-gray-500">{lead.telephone || '-'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{lead.gouvernoratVille || 'N/A'}</div>
                        {lead.distance !== null && (
                          <div className="text-xs text-gray-500">{Math.round(lead.distance)} km</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 mb-1">{lead.factureSteg || '-'}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 font-mono">{lead.refSteg || '-'}</span>
                          {getRefBadge(lead.refStegValid)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          lead.agence === 'Hors Tunisie' ? 'bg-red-100 text-red-800' : 'bg-gamco-orange/20 text-gamco-dark'
                        }`}>
                          {lead.agence}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      <AlertCircle className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p>Aucun lead trouvé.</p>
                      <p className="text-sm mt-1">Importez un fichier ou modifiez vos filtres.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
