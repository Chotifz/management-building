'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, CheckCircle, Clock, Calendar, User, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-800/70 z-10" />
        <div className="bg-[url('/about-hero.jpg')] bg-cover bg-center h-[50vh]" />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl px-4 text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang Kami
            </h1>
            <p className="text-lg md:text-xl">
              PT Pancatiara Sentrausaha adalah perusahaan yang bergerak di bidang manajemen gedung profesional dengan kualitas yang terjaga dan terpercaya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Profil Perusahaan</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Berdiri Sejak 2011</h3>
                    <p className="text-gray-600">
                      Perusahaan didirikan dengan melihat peluang usaha (banyaknya gedung-gedung yang belum dikelola dengan baik) dan sekaligus memberi kesempatan kerja bagi kalangan bawah.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Tim Berpengalaman</h3>
                    <p className="text-gray-600">
                      Perusahaan memiliki tenaga kerja yang cukup berpengalaman, sehingga mendapat kepercayaan dari Pemberi Kerja sejalan dengan bertumbuhnya perusahaan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Bersertifikasi ISO</h3>
                    <p className="text-gray-600">
                      Perusahaan telah mendapatkan Sertifikat Management Mutu ISO 9001:2015, Sertifikat Management K3 ISO 45001:2018 dan Sertifikat Manajemen Lingkungan ISO 14001:2015 dari QS ZÜRICH AG.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-700/20 to-cyan-900/60">
                <div className="p-12 w-full">
                  <div className="mb-6 flex justify-center">
                    <Image 
                      src="/logo.png" 
                      alt="PT Pancatiara Sentrausaha Logo" 
                      width={120} 
                      height={120}
                      className="h-32 w-auto"
                    />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">PT PANCATIARA SENTRAUSAHA</h3>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">
                          Perumahan Persada Kemala Blok 15 No.9 Jakasampurna Kota Bekasi - 17145
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Berdiri sejak 25 Agustus 2011</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-gray-700 text-sm">NIB: 9120108672502</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitmen kami untuk memberikan layanan terbaik di bidang pengelolaan gedung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Visi</h3>
              </div>
              <p className="text-gray-600">
                Menjadi Perusahaan Jasa Pengelolaan Gedung dan Supplier Umum yang dapat dipercaya, dengan menitikberatkan pada Profesionalisme, Ketepatan Waktu dan Berstandar Mutu-K3-Lingkungan yang berorientasi pada Kepuasan Pelanggan
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>
              <p className="text-gray-600">
                Berkomitmen memberi jasa pelayanan dengan Peduli pada Kebutuhan dan Kepercayaan Pelanggan dengan Produk dan Layanan yang memberikan Kepuasan
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Fields Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Bidang Usaha</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Layanan profesional kami dalam pengelolaan gedung dan fasilitas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Instalasi Listrik dan Mekanikal",
              "Kebersihan Umum Bangunan",
              "Perawatan dan Pemeliharaan Taman",
              "Keamanan",
              "Perparkiran Di Luar Badan Jalan",
              "Real Estat atas dasar Kontrak atau Fee"
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Struktur Organisasi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Struktur manajemen PT Pancatiara Sentrausaha
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-10">
                <div className="p-4 bg-cyan-700 text-white text-center rounded-lg mx-auto max-w-xs">
                  <h3 className="font-bold text-lg">DIREKTUR UTAMA</h3>
                </div>
                <div className="w-px h-8 bg-gray-400 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="p-4 bg-cyan-600 text-white text-center rounded-lg">
                    <h3 className="font-bold">DIREKTUR OPERASI</h3>
                  </div>
                  <div className="w-px h-8 bg-gray-400 mx-auto"></div>
                  <div className="p-4 bg-cyan-500 text-white text-center rounded-lg">
                    <h3 className="font-bold">PROYEK-PROYEK</h3>
                  </div>
                </div>
                
                <div>
                  <div className="p-4 bg-cyan-600 text-white text-center rounded-lg">
                    <h3 className="font-bold">DIREKTUR ADM-KEU</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Sertifikasi ISO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Standar internasional yang menjamin kualitas layanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with actual certificate image */}
                <div className="absolute inset-0 flex items-center justify-center bg-cyan-700/10">
                  <Award className="h-16 w-16 text-cyan-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600 mb-4">Sertifikat Manajemen Mutu</p>
                <p className="text-sm text-gray-500">QS ZÜRICH AG</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with actual certificate image */}
                <div className="absolute inset-0 flex items-center justify-center bg-cyan-700/10">
                  <Award className="h-16 w-16 text-cyan-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ISO 45001:2018</h3>
                <p className="text-gray-600 mb-4">Sertifikat Manajemen K3</p>
                <p className="text-sm text-gray-500">QS ZÜRICH AG</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with actual certificate image */}
                <div className="absolute inset-0 flex items-center justify-center bg-cyan-700/10">
                  <Award className="h-16 w-16 text-cyan-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ISO 14001:2015</h3>
                <p className="text-gray-600 mb-4">Sertifikat Manajemen Lingkungan</p>
                <p className="text-sm text-gray-500">QS ZÜRICH AG</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}