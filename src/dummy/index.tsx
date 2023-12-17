import {Lawyer} from '../types';

const dummyLawyers: Lawyer[] = [
  {
    name: 'Rajesh Kumar',
    qualification: 'LLB, JD',
    expertise: ['Criminal Law', 'Family Law'],
    consultedCount: 10,
    yearsOfExperience: 8,
    description:
      'Experienced lawyer with a focus on criminal and family law cases.',
    image:
      'https://i.mscwlns.co/media/misc/others/1681408297619_f6p8f5.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 200,
    status: 'online',
    languages: ['English', 'Hindi'],
  },
  {
    name: 'Priya Gupta',
    qualification: 'LLM',
    expertise: ['Corporate Law', 'Intellectual Property'],
    consultedCount: 15,
    yearsOfExperience: 12,
    description:
      'Specialized in corporate law and intellectual property matters.',
    image:
      'https://i.mscwlns.co/media/misc/others/ezgif.com-webp-to-jpg-converted_32kvz9.jpg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 250,
    status: 'offline',
    languages: ['Hindi'],
  },
  {
    name: 'Amit Singh',
    qualification: 'LLM',
    expertise: ['Immigration Law', 'Real Estate Law'],
    consultedCount: 20,
    yearsOfExperience: 15,
    description: 'Expertise in immigration law and real estate matters.',
    image:
      'https://i.mscwlns.co/media/misc/others/jose-abraham1_huivuq.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 300,
    status: 'online',
    languages: ['English'],
  },
  {
    name: 'Anjali Sharma',
    qualification: 'LLB, LLM',
    expertise: ['Family Law', 'Civil Litigation'],
    consultedCount: 18,
    yearsOfExperience: 10,
    description: 'Specialized in family law and civil litigation cases.',
    image:
      'https://i.mscwlns.co/media/misc/others/istockphoto-1358268236-612x612_3r8e15.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 220,
    status: 'offline',
    languages: ['English', 'Hindi'],
  },
  {
    name: 'Vikram Choudhary',
    qualification: 'LLB',
    expertise: ['Criminal Defense', 'Labor Law'],
    consultedCount: 12,
    yearsOfExperience: 9,
    description: 'Skilled in criminal defense and labor law matters.',
    image:
      'https://i.mscwlns.co/media/misc/others/Subhas_Anandan_lawyer_rc11c2.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 180,
    status: 'online',
    languages: ['English', 'Hindi'],
  },
];

const dummyLawyersHindi: Lawyer[] = [
  {
    name: 'राजेश कुमार',
    qualification: 'एलएलबी, जेडी',
    expertise: ['क्राइमिनल लॉ', 'फैमिली लॉ'],
    consultedCount: 10,
    yearsOfExperience: 8,
    description: 'क्राइमिनल और फैमिली लॉ केसों पर ध्यान केंद्रित अनुभवी वकील।',
    image:
      'https://i.mscwlns.co/media/misc/others/1681408297619_f6p8f5.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 200,
    status: 'ऑनलाइन',
    languages: ['अंग्रेजी', 'हिंदी'],
  },
  {
    name: 'प्रिया गुप्ता',
    qualification: 'एलएलएम',
    expertise: ['कॉर्पोरेट लॉ', 'इंटेलेक्चुअल प्रॉपर्टी'],
    consultedCount: 15,
    yearsOfExperience: 12,
    description: 'कॉर्पोरेट लॉ और इंटेलेक्चुअल प्रॉपर्टी मामलों में विशेषज्ञ।',
    image:
      'https://i.mscwlns.co/media/misc/others/ezgif.com-webp-to-jpg-converted_32kvz9.jpg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 250,
    status: 'ऑफलाइन',
    languages: ['हिंदी'],
  },
  {
    name: 'अमित सिंह',
    qualification: 'एलएलएम',
    expertise: ['इम्मिग्रेशन लॉ', 'रियल एस्टेट लॉ'],
    consultedCount: 20,
    yearsOfExperience: 15,
    description: 'इम्मिग्रेशन लॉ और रियल एस्टेट मामलों में विशेषज्ञता।',
    image:
      'https://i.mscwlns.co/media/misc/others/jose-abraham1_huivuq.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 300,
    status: 'ऑनलाइन',
    languages: ['अंग्रेजी'],
  },
  {
    name: 'अंजलि शर्मा',
    qualification: 'एलएलबी, एलएलएम',
    expertise: ['फैमिली लॉ', 'सिविल लिटिगेशन'],
    consultedCount: 18,
    yearsOfExperience: 10,
    description: 'फैमिली लॉ और सिविल लिटिगेशन केसों में विशेषज्ञ।',
    image:
      'https://i.mscwlns.co/media/misc/others/istockphoto-1358268236-612x612_3r8e15.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 220,
    status: 'ऑफलाइन',
    languages: ['अंग्रेजी', 'हिंदी'],
  },
  {
    name: 'विक्रम चौधरी',
    qualification: 'एलएलबी',
    expertise: ['क्राइमिनल डिफेंस', 'लेबर लॉ'],
    consultedCount: 12,
    yearsOfExperience: 9,
    description: 'क्राइमिनल डिफेंस और लेबर लॉ मामलों में कुशल।',
    image:
      'https://i.mscwlns.co/media/misc/others/Subhas_Anandan_lawyer_rc11c2.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 180,
    status: 'ऑनलाइन',
    languages: ['अंग्रेजी', 'हिंदी'],
  },
];

const dummyLawyersPunjabi: Lawyer[] = [
  {
    name: 'ਰਾਜੇਸ਼ ਕੁਮਾਰ',
    qualification: 'ਐੱਲਬੀ, ਜੇਡੀ',
    expertise: ['ਕਰਾਇਮਿਨਲ ਲਾ', 'ਕੁਟੰਬ ਲਾ'],
    consultedCount: 10,
    yearsOfExperience: 8,
    description: 'ਕਰਾਇਮਿਨਲ ਅਤੇ ਕੁਟੰਬ ਲਾ ਮਾਮਲਿਆਂ ਤੇ ਧਿਆਨ ਕੇਂਦ੍ਰਤ ਅਨੁਭਵੀ ਵਕੀਲ।',
    image:
      'https://i.mscwlns.co/media/misc/others/1681408297619_f6p8f5.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 200,
    status: 'ਆਨਲਾਈਨ',
    languages: ['ਅੰਗਰੇਜ਼ੀ', 'ਹਿੰਦੀ'],
  },
  {
    name: 'ਪ੍ਰਿਯਾ ਗੁਪਤਾ',
    qualification: 'ਐੱਲਐੱਮ',
    expertise: ['ਕਾਰਪੋਰੇਟ ਲਾ', 'ਇੰਟੈਲੈਕਚੂਅਲ ਪ੍ਰਾਪਰਟੀ'],
    consultedCount: 15,
    yearsOfExperience: 12,
    description: 'ਕਾਰਪੋਰੇਟ ਲਾ ਅਤੇ ਇੰਟੈਲੈਕਚੂਅਲ ਪ੍ਰਾਪਰਟੀ ਮਾਮਲਿਆਂ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ਜਞ।',
    image:
      'https://i.mscwlns.co/media/misc/others/ezgif.com-webp-to-jpg-converted_32kvz9.jpg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 250,
    status: 'ਆਫਲਾਈਨ',
    languages: ['ਹਿੰਦੀ'],
  },
  {
    name: 'ਅਮਿਤ ਸਿੰਘ',
    qualification: 'ਐੱਲਐੱਮ',
    expertise: ['ਇਮੀਗ੍ਰੇਸ਼ਨ ਲਾ', 'ਰੀਅਲ ਏਸਟੇਟ ਲਾ'],
    consultedCount: 20,
    yearsOfExperience: 15,
    description: 'ਇਮੀਗ੍ਰੇਸ਼ਨ ਲਾ ਅਤੇ ਰੀਅਲ ਏਸਟੇਟ ਮਾਮਲਿਆਂ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ਜਞਤਾ।',
    image:
      'https://i.mscwlns.co/media/misc/others/jose-abraham1_huivuq.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 300,
    status: 'ਆਨਲਾਈਨ',
    languages: ['ਅੰਗਰੇਜ਼ੀ'],
  },
  {
    name: 'ਅੰਜਲੀ ਸ਼ਰਮਾ',
    qualification: 'ਐੱਲਬੀ, ਐੱਲਐੱਮ',
    expertise: ['ਕੁਟੰਬ ਲਾ', 'ਸਿਵਿਲ ਲਿਟਿਗੇਸ਼ਨ'],
    consultedCount: 18,
    yearsOfExperience: 10,
    description: 'ਕੁਟੰਬ ਲਾ ਅਤੇ ਸਿਵਿਲ ਲਿਟਿਗੇਸ਼ਨ ਮਾਮਲਿਆਂ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ਜਞ।',
    image:
      'https://i.mscwlns.co/media/misc/others/istockphoto-1358268236-612x612_3r8e15.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 220,
    status: 'ਆਫਲਾਈਨ',
    languages: ['ਅੰਗਰੇਜ਼ੀ', 'ਹਿੰਦੀ'],
  },
  {
    name: 'ਵਿਕਰਮ ਚੌਧਰੀ',
    qualification: 'ਐੱਲਬੀ',
    expertise: ['ਕੁ਱ਮਿਨਲ ਡਿਫੈਂਸ', 'ਲੇਬਰ ਲਾ'],
    consultedCount: 12,
    yearsOfExperience: 9,
    description: 'ਕੁ਱ਮਿਨਲ ਡਿਫੈਂਸ ਅਤੇ ਲੇਬਰ ਲਾ ਮਾਮਲਿਆਂ ਵਿੱਚ ਨਿਪੁਣ।',
    image:
      'https://i.mscwlns.co/media/misc/others/Subhas_Anandan_lawyer_rc11c2.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 180,
    status: 'ਆਨਲਾਈਨ',
    languages: ['ਅੰਗਰੇਜ਼ੀ', 'ਹਿੰਦੀ'],
  },
];

const dummyLawyersTamil: Lawyer[] = [
  {
    name: 'ராஜேஷ் குமார்',
    qualification: 'எல்எல்பி, ஜேடி',
    expertise: ['குற்றம் சட்டம்', 'குடும்ப சட்டம்'],
    consultedCount: 10,
    yearsOfExperience: 8,
    description:
      'குற்றம் சட்டம் மற்றும் குடும்ப சட்ட வழக்குகளில் குழந்தையின் முகத்தில் பராமரிக்கப்பட்ட வழக்காடுகள் போல் ஒரு அனுபவப்பட்ட வகையான வழக்காடுகளுக்கு குழந்தையின் முகத்தில் பராமரிக்கப்பட்ட வழக்காடுகள்.',
    image:
      'https://i.mscwlns.co/media/misc/others/1681408297619_f6p8f5.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 200,
    status: 'ஆன்லைன்',
    languages: ['ஆங்கிலம்', 'இந்தி'],
  },
  {
    name: 'பிரியா குப்தா',
    qualification: 'எல்எல்எம்',
    expertise: ['கார்ப்பரேட் சட்டம்', 'புராத்திய சொந்தம்'],
    consultedCount: 15,
    yearsOfExperience: 12,
    description:
      'கார்ப்பரேட் சட்டம் மற்றும் புராத்திய சொந்தம் போன்ற விஷயங்களில் சிறந்த அனு஭வம் கொண்டிருக்கின்றார்.',
    image:
      'https://i.mscwlns.co/media/misc/others/ezgif.com-webp-to-jpg-converted_32kvz9.jpg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 250,
    status: 'ஆஃப்லைன்',
    languages: ['இந்தி'],
  },
  {
    name: 'அமித் சிங்',
    qualification: 'எல்எல்எம்',
    expertise: ['அனுபாரதி சட்டம்', 'உண்டை சட்டம்'],
    consultedCount: 20,
    yearsOfExperience: 15,
    description:
      'அனுபாரதி சட்டம் மற்றும் உண்டை சட்டம் போன்ற விஷயங்களில் அனுபவமுள்ளவர்.',
    image:
      'https://i.mscwlns.co/media/misc/others/jose-abraham1_huivuq.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 300,
    status: 'ஆன்லைன்',
    languages: ['ஆங்கிலம்'],
  },
  {
    name: 'அஞ்சலி ஷர்மா',
    qualification: 'எல்எல்பி, எல்எல்எம்',
    expertise: ['குடும்ப சட்டம்', 'சிவில் வழக்கு'],
    consultedCount: 18,
    yearsOfExperience: 10,
    description: 'குடும்ப சட்டம் மற்றும் சிவில் வழக்குகளில் விஷேஷஜ்ஞர்.',
    image:
      'https://i.mscwlns.co/media/misc/others/istockphoto-1358268236-612x612_3r8e15.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 220,
    status: 'ஆஃப்லைன்',
    languages: ['ஆங்கிலம்', 'இந்தி'],
  },
  {
    name: 'விக்ரம் சௌதரி',
    qualification: 'எல்எல்பி',
    expertise: ['குற்றம் பாதுகாப்பு', 'தொழில் சட்டம்'],
    consultedCount: 12,
    yearsOfExperience: 9,
    description:
      'குற்றம் பாதுகாப்பு மற்றும் தொழில் சட்ட விஷயங்களில் நிபுணமானவர்.',
    image:
      'https://i.mscwlns.co/media/misc/others/Subhas_Anandan_lawyer_rc11c2.jpeg?tr=w-600',
    phoneNumber: '9004334442',
    tariff: 180,
    status: 'ஆன்லைன்',
    languages: ['ஆங்கிலம்', 'இந்தி'],
  },
];

const LAWYER_LANG_MAP = {
  en: dummyLawyers,
  hi: dummyLawyersHindi,
  ta: dummyLawyersTamil,
  pa: dummyLawyersPunjabi,
};

export {LAWYER_LANG_MAP};
