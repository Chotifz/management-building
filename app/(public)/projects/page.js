'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      name: "Gedung A Kampus FKIP Univ. Prof.DR.Hamka",
      category: "pendidikan",
      location: "Jakarta",
      period: "2012-Sekarang",
      description: "Pengelolaan gedung dan fasilitas kampus mencakup pemeliharaan sistem mekanikal elektrikal, kebersihan, dan keamanan.",
      image: "/projects/hamka-fkip.jpg"
    },
    {
      id: 2,
      name: "Gedung PT Lusiana Pilar Utama",
      category: "perkantoran",
      location: "Jakarta",
      period: "2012-2015",
      description: "Manajemen gedung perkantoran komersial termasuk pengelolaan tenant, keamanan, dan pemeliharaan gedung.",
      image: "/projects/lusiana.jpg"
    },
    {
      id: 3,
      name: "Kampus FKIP Univ. Prof.DR.Hamka",
      category: "pendidikan",
      location: "Jakarta",
      period: "2013-Sekarang",
      description: "Layanan pengelolaan fasilitas pendidikan dengan fokus pada pemeliharaan preventif dan keamanan kampus.",
      image: "/projects/hamka-2.jpg"
    },
    {
      id: 4,
      name: "Gedung Plaza Centris-Kuningan",
      category: "komersial",
      location: "Jakarta",
      period: "2013-2015",
      description: "Manajemen pusat perbelanjaan dan perkantoran dengan fokus pada layanan pelanggan dan kebersihan area umum.",
      image: "/projects/plaza-centris.jpg"
    },
    {
      id: 5,
      name: "Kampus UNJ-Rawamangun",
      category: "pendidikan",
      location: "Jakarta",
      period: "2013-2014",
      description: "Pengelolaan fasilitas kampus dan layanan teknis untuk mendukung kegiatan akademik.",
      image: "/projects/unj.jpg"
    },
    {
      id: 6,
      name: "Kampus F.Farmasi Univ. Prof.DR.Hamka",
      category: "pendidikan",
      location: "Jakarta",
      period: "2014-Sekarang",
      description: "Pemeliharaan fasilitas khusus laboratorium dan pengelolaan kebersihan gedung fakultas farmasi.",
      image: "/projects/hamka-farmasi.jpg"
    },
    {
      id: 7,
      name: "Kampus F.Teknik Univ. Prof.DR.Hamka",
      category: "pendidikan",
      location: "Jakarta",
      period: "2014-Sekarang",
      description: "Pengelolaan gedung dan laboratorium teknik, termasuk sistem keamanan dan pemeliharaan peralatan.",
      image: "/projects/hamka-teknik.jpg"
    },
    {
      id: 8,
      name: "Ged.PAUD & Futsal Univ. Prof.DR.Hamka",
      category: "pendidikan",
      location: "Jakarta",
      period: "2015-Sekarang",
      description: "Pemeliharaan gedung dengan standar keamanan tinggi untuk fasilitas pendidikan anak usia dini dan olahraga.",
      image: "/projects/hamka-paud.jpg"
    },
    {
      id: 9,
      name: "Kampus A Univ. Prof.DR.Hamka-Limau",
      category: "pendidikan",
      location: "Jakarta",
      period: "2016-Sekarang",
      description: "Manajemen fasilitas kampus utama dengan fokus pada efisiensi energi dan kenyamanan pengguna.",
      image: "/projects/hamka-limau.jpg"
    },
    {
      id: 10,
      name: "Kampus F.Kedokteran Univ. Prof.DR.Hamka",
      category: "pendidikan",
      location: "Jakarta",
      period: "2019-2020",
      description: "Pengelolaan gedung fakultas kedokteran dengan standar higienitas dan keamanan tinggi.",
      image: "/projects/hamka-kedokteran.jpg"
    },
  ];

  // Special projects that show renovation/additional work
  const specialProjects = [
    {
      name: "Renovasi Kelas Univ. Prof.DR.Hamka-Limau",
      description: "Perbaikan dan pembaharuan fasilitas kelas untuk meningkatkan kualitas pembelajaran.",
      category: "renovasi"
    },
    {
      name: "Renovasi Toilet & Tempat Wudhu Univ. Prof.DR.Hamka-Limau",
      description: "Peningkatan fasilitas sanitasi dengan standar kebersihan tinggi.",
      category: "renovasi"
    },
    {
      name: "Pembuatan Pagar Batas Gedung Plaza Centris",
      description: "Instalasi sistem pembatas keamanan untuk meningkatkan perlindungan properti.",
      category: "pembangunan"
    },
    {
      name: "Renovasi Koridor CT-Scan RSUD Duren Sawit",
      description: "Perbaikan area khusus rumah sakit dengan memperhatikan standar medis.",
      category: "renovasi"
    },
    {
      name: "Renovasi Graha Mahasiswa FKIP Univ. Prof.DR.Hamka",
      description: "Pembaharuan fasilitas mahasiswa untuk menciptakan lingkungan belajar yang lebih baik.",
      category: "renovasi"
    },
    {
      name: "Pengecatan Gedung FKIP Univ. Prof.DR.Hamka",
      description: "Perawatan dan estetika bangunan untuk menjaga tampilan dan perlindungan struktur.",
      category: "perawatan"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter !== "all" && project.category !== filter) return false;
    if (searchTerm && !project.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-800/70 z-10" />
        <div className="bg-[url('/projects-hero.jpg')] bg-cover bg-center h-[50vh]" />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl px-4 text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Portofolio Proyek
            </h1>
            <p className="text-lg md:text-xl">
              Berbagai proyek pengelolaan gedung yang telah kami tangani dengan dedikasi dan kualitas terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={filter === "all" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter("all")}
                className="min-w-24"
              >
                Semua
              </Button>
              <Button 
                variant={filter === "pendidikan" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter("pendidikan")}
                className="min-w-24"
              >
                Pendidikan
              </Button>
              <Button 
                variant={filter === "perkantoran" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter("perkantoran")}
                className="min-w-24"
              >
                Perkantoran
              </Button>
              <Button 
                variant={filter === "komersial" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter("komersial")}
                className="min-w-24"
              >
                Komersial
              </Button>
            </div>
            
            <div className="relative w-full md:w-auto min-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyek Utama</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai proyek pengelolaan gedung yang menjadi bukti komitmen kami terhadap kualitas layanan
            </p>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Tidak ada proyek ditemukan</h3>
              <p className="text-gray-500 mt-2">Coba ubah filter atau kata kunci pencarian Anda</p>
              <Button className="mt-4" onClick={() => {setFilter("all"); setSearchTerm("");}}>
                Reset Filter
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/20 to-cyan-900/60 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-white/30" />
                    </div>
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs py-1 px-3 rounded-bl-lg">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.period}</span>
                      <span className="mx-2">•</span>
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <Link href={`/projects/${project.id}`}>
                        Detail Proyek <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Works */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyek Tambahan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Renovasi dan pekerjaan khusus yang kami lakukan untuk meningkatkan kualitas fasilitas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-xs py-1 px-2 bg-gray-100 rounded-full text-gray-600">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Target Pasar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan solusi pengelolaan gedung untuk berbagai jenis properti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 className="h-16 w-16 text-white/80" />,
                title: "Perkantoran",
                description: "Solusi pengelolaan untuk gedung perkantoran dan ruang kerja komersial"
              },
              {
                icon: <Building2 className="h-16 w-16 text-white/80" />,
                title: "Sekolah / Kampus",
                description: "Layanan khusus untuk institusi pendidikan dengan kebutuhan spesifik"
              },
              {
                icon: <Building2 className="h-16 w-16 text-white/80" />,
                title: "Pusat Perbelanjaan",
                description: "Manajemen fasilitas untuk area komersial dengan lalu lintas tinggi"
              },
              {
                icon: <Building2 className="h-16 w-16 text-white/80" />,
                title: "Rumah Sakit",
                description: "Pengelolaan gedung dengan standar kebersihan dan keamanan khusus"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-6 text-white shadow-lg text-center"
              >
                <div className="mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-700">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Siap Bekerja Sama?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Hubungi kami untuk konsultasi dan temukan bagaimana layanan kami dapat membantu proyek Anda.
            </p>
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}