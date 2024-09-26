import motorcycle_insurance_logo from "../assets/images/motorcycle_insurance_logo.jpeg"
import car_insurance_logo from "../assets/images/car_insurance_logo.jpeg"

export const productList = [
    {
        id: 'zRBijf9EHrDQ',
        title: 'Motorcycle TPL',
        price: 300,
        category: 'Motorcycle Insurance',
        description: 'Aro de luz regulable: el aro de luz de 10.2 pulgadas cuenta con 3 modos de color de luz: blanco, amarillo cálido, blanco cálido. La temperatura de color de la luz alcanza los 2,200 K-12,000 K. Cada modo tiene 11 niveles de brillo ajustables, 33 opciones en total. Este aro de luz satisfará todas tus necesidades en diferentes escenas.',
        images: [motorcycle_insurance_logo],
        coverage: ["Voluntary third party liability cover."]
    },
    {
        id: 'k6uzh2fjdmn7',
        title: 'Motorcycle Comprehensive TPL',
        price: 800,
        category: 'Motorcycle Insurance',
        description: 'Portátil de alto rendimiento: el Chromebook S330 está equipado con un procesador MediaTek MTK8173C, Chrome OS, 4 GB LPDDR3, 64 GB eMMC 5.1 y mucho más -Diseño elegante y elegante: elegante, elegante y seguro, el Lenovo Chromebook S330 es de menos de una pulgada de grosor y 3.3 lbs de luz con una pantalla FHD de 14 pulgadas.',
        images: [motorcycle_insurance_logo],
        coverage: ["Own damage and theft of the unit.", "Voluntary third party liability cover.", "2-seat Unnamed passenger personal accident."]
    },
    {
        id: 'vxujaszda4c3',
        title: 'Disability Insurance',
        price: 800,
        category: 'Disablement Insurance',
        description: 'Accident insurance is a type of insurance plan that pays out when someone is hurt or killed in an accident. This kind of insurance typically excludes coverage for carelessness, divine acts, and natural disasters. The policy may also have restrictions, such as caps on total payouts or prohibitions on payouts for risky behaviours. A lot of insurance providers offer accident insurance, which may be bought separately or added to an existing policy.',
        images: ['https://res.cloudinary.com/silviajcn/image/upload/v1642282411/SPRING-3/productos/laptop5/laptop5.1_bet4br.jpg', 'https://res.cloudinary.com/silviajcn/image/upload/v1642282413/SPRING-3/productos/laptop5/laptop5.2_p2dfco.jpg', 'https://res.cloudinary.com/silviajcn/image/upload/v1642282416/SPRING-3/productos/laptop5/laptop5.3_hmnoaf.jpg'],
        coverage: ["Accidental Disablement and Dismemberment", "Accidental Medical Reimbursement", "Daily Hospital Confinement Benefit due to Accident (max of 15 days)"]
    },
    {
        id: 'ajs2210dwqn',
        title: 'Car Comprehensive TPL',
        price: 900,
        category: 'Car Insurance',
        description: 'Diseño innovador: Hemos diseñado este altavoz para encajar en cualquier estilo de vida estético, con curvas de simplista que es diseñada para encajar perfectamente en la palma de su mano, para soporte de la música a derecho fuera. ultra portabilidad hacen que se puede poner en tu bolso sin esfuerzo. 24 horas de tiempo de juego: una completa de carga permite tu música suelto para hasta 24 horas.',
        images: [car_insurance_logo],
    },
    {
        id: '5ylili2ufeku',
        title: 'Car TPL',
        price: 500,
        category: 'Car Insurance',
        description: 'Rendimiento rápido y suave: siente el tiempo de respuesta instantáneo gracias al procesador Qualcomm Octa-Core. Compatible con redes T-Mobile y AT&T LTE. (Este dispositivo es compatible con la nueva red AT&T el próximo año). Este dispositivo actualmente no está certificado para su uso en Verizon. No es compatible con ninguna red CDMA.',
        images: [car_insurance_logo],
    }
]

export const categoryList = [
    {
        id: 0,
        title: "Motor Insurance",
        image_url: "https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 1,
        title: "Accident Insurance",
        image_url: "https://images.pexels.com/photos/3719815/pexels-photo-3719815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        title: "Travel Insurance",
        image_url: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        title: "Property Insurance",
        image_url: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg",
    }
]

export const subCategoryList = [
    {
        id: 0,
        title: "Motorcycle Insurance",
        category: "Motor Insurance",
        image_url: "https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 1,
        title: "Car Insurance",
        category: "Motor Insurance",
        image_url: "https://images.pexels.com/photos/3719815/pexels-photo-3719815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        title: "Disablement Insurance",
        category: "Accident Insurance",
        image_url: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        title: "Overseas Insurance",
        category: "Travel Insurance",
        image_url: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
    },
    {
        id: 4,
        title: "Real Estate Insurance",
        category: "Property Insurance",
        image_url: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
    }
]
