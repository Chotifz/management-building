'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Clock, Shield, Users, Award, CheckCircle, Building } from "lucide-react";
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

  const featuredProjects = [
    {
      id: 1,
      name: "Kampus FKIP Univ. Prof.DR.Hamka",
      period: "2012-Sekarang",
      image: "/projects/hamka-fkip.jpg",
      description: "Pengelolaan menyeluruh untuk fasilitas pendidikan"
    },
    {
      id: 2,
      name: "Gedung PT Lusiana Pilar Utama",
      period: "2012-2015",
      image: "/projects/lusiana.jpg",
      description: "Manajemen gedung perkantoran komersial"
    },
    {
      id: 3,
      name: "Gedung Plaza Centris-Kuningan",
      period: "2013-2015",
      image: "/projects/plaza-centris.jpg",
      description: "Pengelolaan pusat perbelanjaan dan perkantoran"
    },
    {
      id: 4,
      name: "Kampus F.Farmasi Univ. Prof.DR.Hamka",
      period: "2014-Sekarang",
      image: "/projects/hamka-farmasi.jpg",
      description: "Pemeliharaan fasilitas khusus laboratorium"
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Manajemen Mutu",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "ISO 45001:2018",
      description: "Manajemen K3",
      icon: <Shield className="h-8 w-8" />
    },
    {
      name: "ISO 14001:2015",
      description: "Manajemen Lingkungan",
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="">
        {/* Hero Section */}
        <section className="relative -mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-800/70 z-10" />
          <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-[80vh]" />
          <div className="container absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl px-4 text-white"
            >
              <h1 className="text-5xl font-bold mb-4">
                Solusi Profesional untuk Pengelolaan Gedung Anda
              </h1>
              <p className="text-xl mb-8">
                Dari pemeliharaan hingga pengadaan, kami menjamin layanan terbaik yang berorientasi pada kepercayaan dan kualitas.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-accent-coral hover:bg-accent-coral-dark text-white" asChild>
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

        {/* ISO Certifications */}
        <section className="py-8 bg-secondary text-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center md:text-left md:mr-8">
                <h3 className="text-xl font-bold">Sertifikasi ISO</h3>
                <p className="text-white/80">Kualitas layanan berstandar internasional</p>
              </div>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg"
                >
                  <div className="text-white">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-xs text-white/80">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Preview */}
        <section className="py-20 bg-white">
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
                <h2 className="text-3xl font-bold mb-4 text-surface-darker">Pancatiara Sentrausaha</h2>
                <p className="text-surface-dark mb-6">
                  Pada tahun 2011 perusahaan didirikan dengan melihat peluang usaha (banyaknya gedung-gedung yang belum dikelola dengan baik) dan sekaligus memberi kesempatan kerja bagi kalangan bawah.
                </p>
                <p className="text-surface-dark mb-6">
                  Perusahaan memiliki tenaga kerja yang cukup berpengalaman, sehingga mendapat kepercayaan dari Pemberi Kerja sejalan dengan bertumbuhnya perusahaan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-surface-darker">Visi</h3>
                    <p className="text-sm text-surface-dark">Menjadi Perusahaan Jasa Pengelolaan Gedung dan Supplier Umum yang dapat dipercaya, dengan menitikberatkan pada Profesionalisme, Ketepatan Waktu dan Berstandar Mutu-K3-Lingkungan.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-surface-darker">Misi</h3>
                    <p className="text-sm text-surface-dark">Berkomitmen memberi jasa pelayanan dengan Peduli pada Kebutuhan dan Kepercayaan Pelanggan dengan Produk dan Layanan yang memberikan Kepuasan.</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary-800" asChild>
                  <Link href="/about">
                    Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-surface-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-surface-darker">Layanan Kami</h2>
              <p className="text-surface-dark max-w-2xl mx-auto">
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
              <Button
              variant="outline" className="text-cyan-600 hover:text-cyan-400" asChild>
                <Link href="/services">
                  Lihat Semua Layanan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-surface-darker">Proyek Unggulan</h2>
              <p className="text-surface-dark max-w-2xl mx-auto">
                Berbagai proyek pengelolaan gedung yang telah kami tangani dengan profesionalisme dan kualitas terbaik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <div className="h-full w-full bg-surface-medium relative">
                      {/* If you have actual images, replace this div with an Image component */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-900/60" />
                      <Building className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-white/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                        <p className="text-white/80 text-sm">{project.period}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-surface-dark text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-primary-800" asChild>
                <Link href="/projects">
                  Lihat Semua Proyek <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Target Market Section */}
        <section className="py-16 bg-surface-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-surface-darker">Target Pasar</h2>
              <p className="text-surface-dark max-w-2xl mx-auto">
                Kami menyediakan solusi pengelolaan gedung untuk berbagai jenis properti.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Building2 className="h-12 w-12 text-primary" />, title: "Perkantoran" },
                { icon: <Building className="h-12 w-12 text-primary" />, title: "Sekolah / Kampus" },
                { icon: <Building2 className="h-12 w-12 text-primary" />, title: "Pusat Perbelanjaan" },
                { icon: <Building className="h-12 w-12 text-primary" />, title: "Rumah Sakit" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-surface-darker">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* CTA Section */}
        <section className="relative">
          {/* Background Image Layer */}
          <div className="absolute inset-0">
            <div className="bg-[url('/gambar1.png')] bg-cover bg-center h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-800/70" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Siap Tingkatkan Pengelolaan Gedung Anda?
              </h2>
              <p className="max-w-2xl mx-auto mb-8">
                Hubungi kami hari ini dan temukan bagaimana layanan kami dapat membantu
                mengoptimalkan operasional properti Anda serta menekan biaya perawatan.
              </p>
              <Button
                size="lg"
                variant="outline"
                className=" hover:text-tertiary-75 text-tertiary border"
                asChild
              >
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}