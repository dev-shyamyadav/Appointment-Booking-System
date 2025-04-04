import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Suresh Patil',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patil is dedicated to providing quality healthcare with a focus on preventive medicine and patient well-being.',
        fees: 450,
        address: {
            line1: '17th Cross, Shivaji Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sneha Deshmukh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Deshmukh specializes in women’s health and is committed to providing the best maternal care.',
        fees: 600,
        address: {
            line1: '27th Cross, Kothrud',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rajesh Kulkarni',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Kulkarni is skilled in treating skin conditions and focuses on innovative dermatological solutions.',
        fees: 350,
        address: {
            line1: '37th Cross, Dadar',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Vishal Jadhav',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jadhav is passionate about child healthcare and preventive pediatric treatments.',
        fees: 500,
        address: {
            line1: '47th Cross, Thane West',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Anjali Gokhale',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gokhale specializes in neurological disorders and provides expert consultations.',
        fees: 500,
        address: {
            line1: '57th Cross, Sadashiv Peth',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Arjun Joshi',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MS',
        experience: '5 Years',
        about: 'Dr. Joshi is experienced in treating bone and joint disorders with advanced surgical techniques.',
        fees: 700,
        address: {
            line1: '12th Main, Viman Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Pooja Shinde',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Shinde specializes in treating heart conditions and improving cardiovascular health.',
        fees: 800,
        address: {
            line1: '5th Cross, Bandra West',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Sameer Pawar',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS',
        experience: '3 Years',
        about: 'Dr. Pawar provides expert care for ear, nose, and throat conditions.',
        fees: 550,
        address: {
            line1: '18th Cross, Nashik Road',
            line2: 'Nashik, Maharashtra'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavita Naik',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Naik is an expert in mental health and counseling, providing compassionate psychiatric care.',
        fees: 900,
        address: {
            line1: '23rd Lane, Prabhat Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Ramesh Khot',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, DM',
        experience: '8 Years',
        about: 'Dr. Khot specializes in kidney disorders and provides expert nephrology consultations.',
        fees: 850,
        address: {
            line1: '9th Cross, Kolhapur Road',
            line2: 'Kolhapur, Maharashtra'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Priya Bhosale',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Bhosale specializes in hormonal disorders and metabolic diseases.',
        fees: 750,
        address: {
            line1: '11th Cross, Karve Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Nitin Salunkhe',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MS',
        experience: '6 Years',
        about: 'Dr. Salunkhe provides specialized eye care and advanced ophthalmic treatments.',
        fees: 650,
        address: {
            line1: '6th Cross, Sinhagad Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: "doc13",
        name: "Dr. Aniket Chavan",
        image: doc13,
        speciality: "General physician",
        degree: "MBBS, MS",
        experience: "4 Years",
        about: "Dr. Chavan specializes in musculoskeletal disorders and provides expert orthopedic care.",
        fees: 600,
        address: {
            "line1": "15th Cross, FC Road",
            "line2": "Pune, Maharashtra"
        }
    },
    {
        _id: "doc14",
        name: "Dr. Namita More",
        image: doc14,
        speciality: "Dermatologist",
        degree: "MBBS, DM",
        experience: "5 Years",
        about: "Dr. More is an expert in heart health and cardiovascular diseases.",
        fees: 750,
        address: {
            "line1": "21st Cross, Marine Lines",
            "line2": "Mumbai, Maharashtra"
        }
    },
    {
        _id: "doc15",
        name: "Dr. Rohit Kulkarni",
        image: doc15,
        speciality: "Gastroenterologist",
        degree: "MBBS, MS",
        experience: "3 Years",
        about: "Dr. Kulkarni provides comprehensive treatment for ear, nose, and throat conditions.",
        fees: 550,
        address: {
            "line1": "19th Cross, Kalyan Nagar",
            "line2": "Mumbai, Maharashtra"
        }
    }
]