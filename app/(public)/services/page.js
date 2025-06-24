'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Shield, Clock, Sparkles, Wrench, UserCog, Briefcase, Leaf, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const mainServices = [
    {
      id: "maintenance",
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Pemeliharaan Gedung",
      description: "Layanan pemeliharaan menyeluruh untuk menjaga kondisi properti Anda tetap prima, termasuk sistem mekanikal dan elektrikal, perawatan preventif, dan perbaikan.",
      features: [
        "Pemeliharaan preventif dan korektif",
        "Inspeksi rutin dan terjadwal",
        "Pengelolaan sistem mekanikal dan elektrikal",
        "Pemantauan dan optimalisasi operasional gedung",
        "Perbaikan dan penggantian komponen",
        "Dokumentasi dan pelaporan kondisi"
      ]
    },
    {
      id: "security",
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Layanan Keamanan",
      description: "Solusi keamanan yang andal dengan petugas terlatih dan sistem keamanan terpadu untuk melindungi gedung dan seluruh penghuninya.",
      features: [
        "Penyediaan petugas keamanan terlatih",
        "Pengawasan CCTV dan sistem keamanan",
        "Pengelolaan akses masuk dan keluar",
        "Patroli keamanan rutin",
        "Tanggap darurat 24/7",
        "Pelaporan insiden keamanan"
      ]
    },
    {
      id: "cleaning",
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Kebersihan Umum Bangunan",
      description: "Layanan kebersihan profesional untuk menjaga lingkungan yang bersih, sehat, dan nyaman bagi penghuni gedung.",
      features: [
        "Pembersihan rutin area umum",
        "Pengelolaan sampah dan limbah",
        "Pembersihan kaca dan fasad gedung",
        "Perawatan lantai dan permukaan",
        "Pembersihan toilet dan fasilitas sanitasi",
        "Penggunaan peralatan dan bahan pembersih ramah lingkungan"
      ]
    },
    {
      id: "technical",
      icon: <UserCog className="h-12 w-12 text-primary" />,
      title: "Dukungan Teknis",
      description: "Tim teknisi berpengalaman yang siap menyelesaikan masalah teknis dan memastikan semua sistem berjalan optimal.",
      features: [
        "Pemeliharaan sistem AC dan ventilasi",
        "Pengelolaan sistem listrik dan penerangan",
        "Pemeliharaan sistem plumbing",
        "Perbaikan sistem elevator",
        "Pengelolaan sistem fire alarm dan sprinkler",
        "Pemeliharaan generator dan UPS"
      ]
    }
  ];
  
  const additionalServices = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Perawatan dan Pemeliharaan Taman",
      description: "Perawatan rutin area hijau, penanaman, dan pemeliharaan tanaman untuk menciptakan lingkungan yang asri."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Perparkiran Di Luar Badan Jalan",
      description: "Pengelolaan area parkir yang efisien dengan sistem yang terorganisir dan pengawasan keamanan."
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Real Estat atas dasar Kontrak atau Fee",
      description: "Pengelolaan properti dengan berbagai skema kontrak yang fleksibel sesuai kebutuhan klien."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Manajemen Staf",
      description: "Pengelolaan profesional untuk staf kebersihan dan teknis demi operasional gedung yang optimal."
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70 z-10" />
        <div className="bg-[url('/services-hero.jpg')] bg-cover bg-center h-[50vh]" />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl px-4 text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan Kami
            </h1>
            <p className="text-lg md:text-xl">
              Menyediakan berbagai layanan pengelolaan gedung dan penyediaan kebutuhan umum secara profesional, tepat waktu, dan sesuai standar mutu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-surface-darker">Solusi Pengelolaan Gedung Terpadu</h2>
            <p className="text-surface-dark max-w-2xl mx-auto">
              PT Pancatiara Sentrausaha menyediakan layanan pengelolaan gedung profesional dengan kualitas terjaga dan terpercaya, didukung oleh sertifikasi ISO 9001:2015, ISO 45001:2018, dan ISO 14001:2015.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: <Shield className="h-10 w-10 text-white" />, 
                title: "Profesionalisme", 
                description: "Tim profesional yang terlatih dan berdedikasi" 
              },
              { 
                icon: <Clock className="h-10 w-10 text-white" />, 
                title: "Ketepatan Waktu", 
                description: "Layanan yang tepat waktu sesuai jadwal" 
              },
              { 
                icon: <Sparkles className="h-10 w-10 text-white" />, 
                title: "Standar Mutu", 
                description: "Mengikuti standar mutu, K3, dan lingkungan" 
              },
              { 
                icon: <UserCog className="h-10 w-10 text-white" />, 
                title: "Dukungan 24/7", 
                description: "Tim siap melayani kapanpun dibutuhkan" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-400 to-primary-900 rounded-lg p-6 text-white shadow-lg"
              >
                <div className="p-3 bg-white/10 rounded-full inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-surface-light' : 'bg-white'}`}
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4 text-surface-darker">{service.title}</h2>
                <p className="text-surface-dark mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="p-1 bg-primary/10 rounded-full mt-1">
                        <CheckIcon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-surface-dark">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-primary-900/30 flex items-center justify-center">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-surface-darker">Layanan Tambahan</h2>
            <p className="text-surface-dark max-w-2xl mx-auto">
              Kami juga menyediakan layanan penunjang untuk memenuhi seluruh kebutuhan pengelolaan gedung Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex p-6 bg-white rounded-lg shadow-md border border-surface-medium"
              >
                <div className="mr-4 p-3 bg-primary/10 rounded-full h-min">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-surface-darker">{service.title}</h3>
                  <p className="text-surface-dark">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-surface-light">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-surface-darker">Pendekatan Kami</h2>
            <p className="text-surface-dark max-w-2xl mx-auto">
              Bagaimana kami memberikan layanan terbaik untuk kepuasan Anda
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-surface-medium transform -translate-x-1/2" />
            
            {[
              {
                title: "Konsultasi & Perencanaan",
                description: "Kami memulai dengan memahami kebutuhan spesifik Anda dan merencanakan solusi yang tepat."
              },
              {
                title: "Penyediaan Sumber Daya",
                description: "Menyiapkan tim profesional dan peralatan yang dibutuhkan untuk melaksanakan pekerjaan."
              },
              {
                title: "Implementasi Layanan",
                description: "Menjalankan layanan sesuai rencana dengan mengutamakan kualitas dan standar K3."
              },
              {
                title: "Pemantauan & Evaluasi",
                description: "Melakukan pengawasan dan evaluasi rutin untuk memastikan standar kualitas terjaga."
              },
              {
                title: "Pelaporan Berkala",
                description: "Memberikan laporan berkala tentang kinerja dan kondisi terkini."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                  <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-20 ${index % 2 === 0 ? 'left-0 -translate-x-10' : 'right-0 translate-x-10'}`} />
                  <span className="bg-primary text-white text-sm py-1 px-3 rounded-full mb-3 inline-block">
                    Step {index + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-surface-darker">{step.title}</h3>
                  <p className="text-surface-dark">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Mulai Optimalkan Pengelolaan Gedung Anda</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan properti Anda.
            </p>
            <Button size="lg" variant="outline" className="bg-accent-gold hover:bg-accent-gold-dark text-black border-accent-gold" asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// CheckIcon component
const CheckIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);