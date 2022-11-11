import React from 'react'
import { LogoHead, Tentang } from '../../assets'
import Slider from '../../components/atoms/Slider'

const Home = () => {
    return (
        <div className=''>
            <div className='container'>
            {/* Hero Section */}
                <div id='hero' className='w-full h-screen bg-[url("/src/assets/img/bg/bg-transport.jpg")] bg-cover px-4'>
                    <div className='flex items-center'>
                        <img src={LogoHead} alt='logo' className='inline mt-16' />
                        <span className='bg-clip-text mt-16 text-transparent font-bold bg-gradient-to-r from-slate-800 to-orange-400'>
                            <h1 className='text-3xl font-bold'>Platinum Corp</h1>
                        </span>
                    </div>
                </div>
                {/* Unit Section */}
                <div id='unit' className='bg-neutral-200 relative'>
                    <span className='top-0 mx-2'>
                        <h1 className='text-2xl text-dark text-center font-bold'>Unit Bisnis</h1>
                        <hr className='border-2 mx-auto w-1/3 border-orange-400' />
                    </span>
                
                <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                    {/* Kiri */}
                    <div className='w-full self-center bg-[url("/src/assets/img/bg/home-decor.jpg")] bg-cover lg:w-1/2 h-80 max-h-full rounded-xl shadow-xl text-center group'>
                        <div className='group-hover:bg-black/30 group-hover:backdrop-blur-sm group-hover:rounded-xl transition duration-300 w-full h-full py-5 px-4'>
                        <span className='uppercase text-xl font-bold'>
                        <h1 className='text-white'>Platinum Decoration</h1>
                        </span>                    
                        <h2 className='text-sm text-center font-extralight text-white -mt-2 mb-24'>Dekorasikan Perayaan Kamu!</h2>
                        <p className='text-white text-sm text-center font-serif'>Melayani dekorasi pesta kamu! seperti wedding, pesta ulangtahun, tunangan, dan sebagainya!
                        </p>
                        
                        <br />
                        <span className='flex justify-center'>
                        <a href="#home" className='text-base font-semibold text-white py-2 bg-orange-400 px-3 rounded-full  hover:scale-90 transition-all duration-300'>Lihat Selengkapnya</a>
                        </span>
                        </div>
                    </div>
                    {/* kanan */}
                    <div className='w-full text-center self-center bg-[url("/src/assets/img/bg/home-transport.jpg")] bg-cover lg:w-1/2 h-80 max-h-full rounded-xl shadow-xl group'>
                        <div className='group-hover:bg-black/30 group-hover:backdrop-blur-sm group-hover:rounded-xl transition duration-300 w-full h-full py-5 px-4'>
                        <span className='uppercase text-xl font-bold'>
                        <h1 className='text-white'>Platinum Transport</h1>
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
                </div>
                {/* About Section */}
                <div id='about' className=''>
                    <span className='mx-2'>
                        <h1 className='text-center text-2xl font-bold'>Tentang Kami</h1>
                        <hr className='border-2 mx-auto w-1/3 border-orange-400' />
                    </span>
                    <div className='w-full flex flex-wrap lg:gap-4 lg:flex-nowrap'>
                        <div className='w-full max-h-screen h-full mt-2 mb-8 relative lg:w-1/2 self-start p-3 border-black border-r shadow-xl rounded-xl'>
                            <h2 className='text-dark text-xl text-center font-semibold'>Sekilas tentang Platinum Corp</h2>
                            <img src={Tentang} alt='tentang' className='w-[200px] h-[200px] mx-auto' />
                            <p className='text-justify text-secondary'>Dimulai didirikan pada tangaal 17 Agustus 1945. Berawal dari ide sang pemilik untuk menyediakan jasa dekorasi tunangan dan pesta ulangtahun untuk masyarakat di sekitar Majenang. Kemudian Jordan, selaku pemilik dan penggagas usaha merekrut teman-teman dekat yang bersedia untuk bekerja di bawah naungan Platinum Corp</p>
                        </div>
                        <div className='w-full max-h-screen h-full relative lg:w-1/2 self-start p-3 mb-8 border-black border-r shadow-xl rounded-xl '>
                        <h2 className='text-dark text-xl text-center font-semibold mb-2'>Testimoni Pelanggan</h2>
                        <p className='text-base text-secondary'>Beberapa testimoni dari pelanggan yang telah menggunakan jasa kami</p>
                            <div className='py-3 my-5'>
                                <Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
    </div>
    
  )
}

export default Home