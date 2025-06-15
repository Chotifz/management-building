'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/shared/service-card";


export default function Home() {
  useEffect(() => {
    document.title = "Pancatiara Sentrausaha - Jasa Pengelolaan Gedung dan Supplier";
  }, []);

 const services = [
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Pemeliharaan Gedung",
    description: "Layanan pemeliharaan menyeluruh untuk menjaga kondisi properti Anda tetap prima sepanjang tahun.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Layanan Keamanan",
    description: "Solusi keamanan yang andal untuk melindungi gedung dan seluruh penghuninya.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Dukungan 24/7",
    description: "Layanan pelanggan dan tim tanggap darurat yang siap melayani Anda setiap saat.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Manajemen Staf",
    description: "Pengelolaan profesional untuk staf kebersihan dan teknis demi operasional gedung yang optimal.",
  },
];

  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="">
        {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-800/70 z-10" />
        <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-[80vh]" />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl px-4 text-slate-100"
          >
            <h1 className="text-5xl font-bold mb-4">
             Solusi Profesional untuk Pengelolaan Gedung yang Anda
            </h1>
            <p className="text-xl mb-8">
             Dari pemeliharaan hingga pengadaan, kami menjamin layanan terbaik yang berorientasi pada kepercayaan dan kualitas.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link href="/services">
                  Layanan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white" asChild>
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 bg-white ">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <img 
                src="/gambar1.png" 
                alt="Building Management Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Pancatiara Sentrausaha</h2>
              <p className="text-gray-600 mb-6">
               Pada tahun 2011 perusahaan didirikan dengan melihat peluang usaha (banyaknya gedung-gedung yang belum dikelola dengan baik) dan sekaligus memberi kesempatan kerja bagi kalangan bawah.
              </p>
              <p className="text-gray-600 mb-6">
                 Perusahaan memiliki tenaga kerja yang cukup berpengalaman, sehingga mendapat kepercayaan dari Pemberi Kerja sejalan dengan bertumbuhnya perusahaan.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan pengelolaan gedung dan penyediaan kebutuhan umum secara profesional, tepat waktu, dan sesuai standar mutu, K3, serta lingkungan — demi kepuasan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                Lihat Semua Layanan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <h2 className="text-3xl font-bold mb-4">Siap Tingkatkan Pengelolaan Gedung Anda?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Hubungi kami hari ini dan temukan bagaimana layanan kami dapat membantu mengoptimalkan operasional properti Anda serta menekan biaya perawatan.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      </div>
      
    </div>
  );
}