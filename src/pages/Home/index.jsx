import React from 'react'
import { LogoHead, Tentang } from '../../assets'
import { Slider } from '../../components/atoms'
import SliderTim from '../../components/atoms/SliderTim'
import JudulTab from '../../utils/judulTab'

import './home.css'

const Home = () => {

    JudulTab('Platinum Works')

    return (
        <div className=''>
            <div className=''>
            {/* Hero Section */}
                <section id='hero' className='w-full h-screen bg-[url("/src/assets/img/bg/bg-transport.jpg")] bg-cover px-4'>
                    <div className='flex items-center'>
                        <img src={LogoHead} alt='logo' className='inline mt-16 lg:w-[180px] lg:h-[180px]' />
                        <span className='bg-clip-text mt-16 text-transparent font-bold bg-gradient-to-r from-slate-800 to-orange-400'>
                            <h1 className='ml-1 text-3xl lg:text-5xl font-bold'>Platinum Works</h1>
                        </span>
                    </div>
                </section>
                {/* Unit Section */}
                <section id='unit' className='px-4 bg-gradient-to-b from-slate-200 to-white relative'>
                    <span className='top-0 mx-2'>
                        <h1 className='text-2xl text-dark text-center font-bold'>Unit Bisnis</h1>
                        <hr className='border-2 mx-auto w-1/3 lg:w-1/12 border-orange-400' />
                    </span>
                
                <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                    {/* Kiri */}
                    <div className='w-full self-center bg-[url("/src/assets/img/bg/home-decor.jpg")] bg-cover lg:w-1/2 h-80 max-h-full rounded-xl shadow-xl text-center group'>
                        <div className='group-hover:bg-black/30 group-hover:backdrop-blur-sm group-hover:rounded-xl transition duration-300 w-full h-full py-5 px-4'>
                        <span className='uppercase text-xl font-bold'>
                        <h1 id='judulunit' className='text-orange-300'>Platinum Decoration</h1>
                        </span>                    
                        <h2 className='text-sm text-center font-extralight text-white -mt-2 mb-24'>Dekorasikan Perayaan Kamu!</h2>
                        <p className='text-white text-sm text-center font-serif'>Melayani dekorasi pesta kamu! seperti wedding, pesta ulangtahun, tunangan, dan sebagainya!
                        </p>
                        
                        <br />
                        <span className='flex justify-center'>
                        <a href="/decoration" className='text-base font-semibold text-white py-2 bg-orange-400 px-3 rounded-full  hover:scale-90 transition-all duration-300'>Lihat Selengkapnya</a>
                        </span>
                        </div>
                    </div>
                    {/* kanan */}
                    <div className='w-full text-center self-center bg-[url("/src/assets/img/bg/home-transport.jpg")] bg-cover lg:w-1/2 h-80 max-h-full rounded-xl shadow-xl group'>
                        <div className='group-hover:bg-black/30 group-hover:backdrop-blur-sm group-hover:rounded-xl transition duration-300 w-full h-full py-5 px-4'>
                        <span className='uppercase text-xl font-bold'>
                        <h1 className='text-orange-300'>Platinum Transport</h1>
                        </span> 
                        <h2 className='text-xs text-center font-extralight text-white -mt-2 mb-24'>Kami angkut, kami antar!</h2>
                        <p className='text-white text-sm text-center font-serif'>Melayani jasa angkut barang. Mau pindahan rumah, pindahan kosan, antar katering? Semua Kita Angkut!</p>
                        <br />
                        <span className='flex justify-center'>
                            <a href="#home" className='text-base font-semibold text-white py-2 bg-orange-400 px-3 rounded-full hover:scale-90 transition-all duration-300'>Lihat Selengkapnya</a>
                        </span>
                        </div>
                    </div>
                </div>
                </section>
                {/* About Section */}
                <section id='about' className='px-4'>
                    <span className='mx-2'>
                        <h1 className='text-center text-2xl font-bold'>Tentang Kami</h1>
                        <hr className='border-2 mx-auto w-1/3 lg:w-1/12 border-orange-400' />
                    </span>
                    <div className='w-full flex flex-wrap lg:gap-4 lg:flex-nowrap rounded-xl'>
                        <div className='w-full h-full mt-2 mb-8 relative lg:w-1/2 self-start p-3 '>
                            <h2 className='text-dark text-xl text-center font-semibold'>Sekilas tentang Platinum Works
                            </h2> 
                            <p className='text-justify text-secondary'>Dimulai didirikan pada tangaal 17 Agustus 1945. Berawal dari ide sang pemilik untuk menyediakan jasa dekorasi tunangan dan pesta ulangtahun untuk masyarakat di sekitar Majenang. Kemudian Jordan, selaku pemilik dan penggagas usaha merekrut teman-teman dekat yang bersedia untuk bekerja di bawah naungan Platinum Works</p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img src={Tentang} alt='tentang' className='w-56 h-56 mx-auto self-end' />
                        </div>
                        
                    </div>
                </section>
                {/* Team Section */}
                <section id='team' className='my-4 px-4'>
                        <div className='mb-7'>
                            <h1 className='text-center text-2xl font-bold'>Anggota Tim</h1>
                            <hr className='border-2 mx-auto w-1/3 lg:w-1/12 border-orange-400' />
                        </div>

                <div className='px-4 flex flex-wrap lg:flex-nowrap mt-3 w-full'>
                    <div className='lg:w-1/3 h-full mb-3'>
                        <p className='text-lg text-secondary font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi eius veritatis quia quidem voluptatem commodi. Eius impedit excepturi molestias earum id? Aspernatur rerum, quidem suscipit voluptates, dolore fugit consequatur fugiat, tenetur magnam ratione hic animi.</p>
                    </div>
                    <div className='lg:w-2/3 md:h-screen h-screen bg-transparent overflow-hidden ml-2'>
                        <SliderTim />
                    </div>
                </div>

                </section>
                {/* testimoni section */}
                <section id='testimoni' className='pt-4'>
                        <h1 className='text-center text-2xl font-bold'>Testimoni Pelanggan</h1>
                        <hr className=' mx-auto w-1/3 lg:w-1/12 border-2 border-orange-400' />
                    <div className='w-full max-h-screen h-full relative self-start p-3 mb-5 mt-3 shadow-xl bg-dark '>
                            <div className='py-3 lg:my-5'>
                                <Slider />
                            </div>
                        </div>
                </section>
            </div>      
    </div>
    
  )
}

export default Home