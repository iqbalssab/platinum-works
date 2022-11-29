import React, { useState } from 'react'
import { image1, image10, image2, image3, image4, image5, image6, image7, image8, image9, LogoHead, paketBirthday, paketEngagement, paketWedding, Party } from '../../assets'
import { DecorSlider } from '../../components'
import {Modal} from '../../components/atoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faGift, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import JudulTab from '../../utils/judulTab'

const Decoration = () => {

  JudulTab('Platinum Decoration')

  // Use State buat nampilin modal
  const [showModal, setShowModal] = useState(false)
  // Nonaktifin modal
  const handleOnClose = () => setShowModal(false)

  return (
    <div>
        <div id='hero' className='w-full h-screen md:h-screen bg-[url("/src/assets/img/bg/bg-decor2.jpg")] bg-cover '>
        <div className='px-4 bg-white/20 backdrop-blur-xs h-full flex flex-wrap md:flex-none'>
            {/* kiri */}
            <div className='md:w-1/2 w-full md:h-96 mt-10 lg:mt-24 text-white'>
                <div className='flex items-center'>
                        <img src={LogoHead} alt='logo' className='inline h-[150px] w-[150px] mt-16 ml-auto' />
                        <span className='bg-clip-text ml-2 mr-auto mt-12 text-transparent font-bold bg-gradient-to-r from-slate-800 to-orange-400'>
                            <h1 className='text-4xl lg:text-[4rem] text-center font-bold'>Platinum</h1>
                            <hr className='w-full border-2 border-primary lg:my-2' />
                            <h1 className=' text-4xl lg:text-[4rem] text-center font-bold'>Decoration</h1>
                        </span>
                </div>
                <div className='-mt-8 mx-auto'>
                  <DecorSlider />
                </div>
            </div>
            {/* kanan */}
            <div className='md:w-1/2 md:h-full w-full h-80 lg:mt-24 relative'>
              <img src={Party} className='md:w-72 w-52 z-10 absolute lg:top-[5rem] top-10 lg:left-[8rem] left-[6rem]' alt='img decor' />
            <span className='lg:w-[26rem] lg:h-[26rem] w-[16rem] h-[16rem] rounded-full bg-primary opacity-70 absolute top-0 lg:left-14 left-[4.5rem] mx-auto'>
            </span>
            </div>
          </div>
          
        </div>

        {/* summary Section */}
        <div id='summary' className='w-full h-40 lg:relative mb-96 lg:mb-4'>
          <div className='lg:absolute flex lg:flex-nowrap flex-wrap justify-center gap-5 px-4 py-2 -top-14 w-full h-40'>
            <div className='lg:w-56 w-60 h-full bg-white border-t pb-2 lg:px-0 border-dark rounded-lg shadow-md grid hover:-translate-y-5 transition duration-500 lg:box-content box-border'>
            <FontAwesomeIcon icon={faHandshake} className=' mt-2 w-10 h-10 -mb-2 mx-auto text-primary'> </FontAwesomeIcon>
              <h1 className='text-4xl font-extrabold text-orange-500 self-end text-center'>100+</h1>
              <p className='text-sm text-secondary font-sans self-end text-center'>Lebih dari 100 Klien menggunakan jasa kami</p>
            </div>
            <div className='lg:w-56 w-60 h-full bg-white border-t pb-2 border-dark rounded-lg shadow-md grid box-content'>
            <FontAwesomeIcon icon={faGift} className=' mt-2 w-8 h-8 -mb-2 mx-auto text-primary'> </FontAwesomeIcon>
              <h1 className='text-4xl font-extrabold text-orange-500 self-end text-center'>4</h1>
              <p className='text-sm text-secondary font-sans self-end text-center'>Terdapat 4 Pilihan Paket yang bisa anda pilih!</p>
            </div>
            <div className='lg:w-56 w-60 h-full bg-white border-t pb-2 border-dark rounded-lg shadow-md grid box-content'>
            <FontAwesomeIcon icon={faCalendarDay} className=' mt-2 w-8 h-8 -mb-2 mx-auto text-primary'> </FontAwesomeIcon>
              <h1 className='text-4xl font-extrabold text-orange-500 self-end text-center'>3+</h1>
              <p className='text-sm text-secondary font-sans self-end text-center'>Berpengalaman lebih dari 3 tahun dalam melayani kebutuhan dekorasi</p>
            </div>
          </div>
        </div>
        {/* Galeri Section */}
        <div id='galeri' className='w-full h-full bg-gradient-to-b from-white to-slate-300'>
            <h1 className='text-2xl text-dark text-center font-bold'>Galeri Portofolio Kami</h1>
            <hr className='border-2 mx-auto w-1/3 lg:w-1/12 border-orange-400' />
            {/* Isi Galeri */}
            <div className="mt-3 p-2 font-sans grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4">
        <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex"><span className="self-center">Our Beloved Clients</span></h2>
        <div className="h-15 text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 md:flex"><span className="self-end"><span><FontAwesomeIcon icon={faInstagram} className='text-red-400'> </FontAwesomeIcon></span> @platinum.decoration</span></div>

        <div className="grid-card group">
            <div className="grid-card-img">
                <div className='group-hover:selaput-galeri transition duration-500 ease-in-out'>
                  <h2 className='hidden self-center group-hover:block text-white'>Acara Khitanan Ranu N K</h2>
                </div>
                <img src={image1} className='card-img' alt="galeri1" />
              
            </div>
        </div>
        <div className="grid-card group md:col-start-3">
            <div className="grid-card-img">
            <div className='group-hover:selaput-galeri transition duration-500 ease-in-out'>
                  <h2 className='hidden self-center group-hover:block text-white'>Pernikahan Adat Pulu-pulu</h2>
                </div>
              <img src={image2} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group">
            <div className="grid-card-img">
              <img src={image3} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group">
            <div className="grid-card-img">
              <img src={image4} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group">
            <div className="grid-card-img">
              <img src={image5} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group md:col-start-2">
            <div className="grid-card-img">
              <img src={image6} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group md:col-start-4">
            <div className="grid-card-img">
              <img src={image7} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group">
            <div className="grid-card-img">
              <img src={image8} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group md:col-start-3">
            <div className="grid-card-img">
              <img src={image9} className='card-img' alt="" />
            </div>
        </div>
        <div className="grid-card group md:col-start-3">
            <div className="grid-card-img">
              <img src={image10} className='card-img' alt="" />
            </div>
        </div>
    </div>

        </div>
        {/* Paket Section */}
        <div id='paket' className='w-full h-full pt-3 pb-3 bg-gradient-to-b from-slate-300 to-dark'>
          <h1 className='text-2xl text-dark text-center font-bold'>Paket Acara 2023</h1>
          <hr className='border-2 mx-auto w-1/3 lg:w-1/12 border-orange-400' />
        
        {/* Paket Acara */}
          <div className='container lg:gap-8 mt-4 pb-3 mx-auto px-6 sm:flex sm:flex-wrap lg:flex-nowrap sm:gap-5 lg:justify-evenly sm:justify-between'>

            <div className='rounded-lg shadow-lg overflow-hidden sm:w-64 md:w-80 lg:w-72 bg-white'>
              <img src={paketEngagement} alt="paketEngagement" className='w-full' />
              <div className='px-4 py-4'>
                <div className='font-bold text-xl mb-2 text-dark'>Paket Tunangan</div>
                <p className='text-sm text-secondary text-justify'>
                  Desain dan menggunakan bahan-bahan yang simpel namun tidak menghilangkan estetika. Sangat pas untuk acara yang sederhana dan tidak memerlukan tempat yang luas
                </p>
                <div className='mb-3 pb-2 float-right'>
                <button onClick={() => setShowModal(true)} className='bg-primary text-white px-3 py-1 rounded-full'>
                    Selengkapnya
                </button>
                </div>
              </div>
                <Modal 
                visible={showModal} 
                onClose={handleOnClose} 
                badan={"Ini modal pertama"}
                judul={'Paket Tunangan blablablablbalbalblablabalblab'}
                />
            </div>
            <div className='rounded-lg shadow-lg overflow-hidden sm:w-64  md:w-80 lg:w-72 bg-white'>
              <img src={paketWedding} alt="paketEngagement" className='w-full' />
              <div className='px-4 py-4'>
                <div className='font-bold text-xl mb-2 text-dark'>Paket Wedding</div>
                <p className='text-sm text-secondary text-justify'>
                  Paket lengkap sangat cocok untuk venue yang besar dan jumlah tamu undangan yang banyak. Sudah termasuk peritilan-peritilannya,
                </p>
                <div className='mb-3 pb-2 float-right'>
                <button onClick={() => setShowModal(true)} className='bg-primary text-white px-3 py-1 rounded-full'>
                    Selengkapnya
                </button>
                </div>
              </div>
              <Modal 
                visible={showModal} 
                onClose={handleOnClose} 
                badan={`Ini modal Kedua`}
                judul={'Paket Wedding'}
                />
            </div>
            <div className='rounded-lg shadow-lg overflow-hidden sm:w-64  md:w-80 lg:w-72 bg-white'>
              <img src={paketBirthday} alt="paketEngagement" className='w-full' />
              <div className='px-4 py-4'>
                <div className='font-bold text-xl mb-2 text-dark'>Paket Ulangtahun</div>
                <p className='text-sm text-secondary text-justify'>
                  Paket lengkap sangat cocok untuk venue yang besar dan jumlah tamu undangan yang banyak. Sudah termasuk peritilan-peritilannya,
                </p>
                <div className='mb-3 pb-2 float-right'>
                <button className='bg-primary text-white px-3 py-1 rounded-full'>
                    Selengkapnya
                </button>
                </div>
              </div>
            </div>
            <div className='rounded-lg shadow-lg overflow-hidden sm:w-64  md:w-80 lg:w-72 bg-white'>
              <img src={paketBirthday} alt="paketEngagement" className='w-full' />
              <div className='px-4 py-4'>
                <div className='font-bold text-xl mb-2 text-dark'>Paket Ulangtahun</div>
                <p className='text-sm text-secondary text-justify'>
                  Paket lengkap sangat cocok untuk venue yang besar dan jumlah tamu undangan yang banyak. Sudah termasuk peritilan-peritilannya,
                </p>
                <div className='mb-3 pb-2 float-right'>
                  <button className='bg-primary text-white px-3 py-1 rounded-full'>
                      Selengkapnya
                  </button>
                </div>
              </div>
            </div>
      
          </div>
        <hr className='w-1/6 border-slate-600 mx-auto' />
        </div>
    </div>
  )
}

export default Decoration