import { useState } from 'react';

const ServicesPolicySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    { 
      title: 'SOFTWARE DEVELOPMENT',
      subTitle: 'Software Development',
      desc: 'Web and mobile app development and system development tailored to modern, robust, and durable tech architecture.',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
      tag: null,
      list: ['Web App & Mobile', 'API & Microservices', 'Cloud-native', 'DevOps CI/CD'],
      color: 'slate-900'
    },
    { 
      title: 'DIGITAL TRANSFORMATION',
      subTitle: 'Digital Transformation Consulting',
      desc: 'Strategic consulting and implementation of comprehensive digital transformation solutions, helping your business adapt and lead global technology trends.',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>,
      tag: 'MOST POPULAR',
      list: ['Digitalization Strategy', 'Process Automation', 'ERP & CRM', 'Data Analysis'],
      color: 'cyan-600'
    },
    { 
      title: 'SYSTEM SECURITY',
      subTitle: 'System Security',
      desc: 'Assessment, design, and implementation of comprehensive security solutions for IT systems, protecting data and digital assets of your business.',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15l-4-4 4-4"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a9 9 0 019 9c0 5.25-4.2 9-9 9s-9-3.75-9-9c0-5.25 4.2-9 9-9z"/></svg>,
      tag: null,
      list: ['Pentest & Audit', 'Data Encryption', '24/7 Monitoring', 'Attack Prevention'],
      color: 'navy-blue-900'
    },
  ];

  const policies = [
    { 
      number: '01', 
      title: 'Information We Collect', 
      content: (
        <>
          <p>We may collect the following information:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li>Personal information such as name, email, phone number.</li>
            <li>Device information (model, OS version, unique identifiers).</li>
            <li>App usage data (features you use, crash logs, performance data).</li>
          </ul>
        </>
      ) 
    },
    { 
      number: '02', 
      title: 'How We Use Your Information', 
      content: (
        <>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li>Provide and improve our services.</li>
            <li>Send important updates about your account or our services.</li>
            <li>Analyze usage to improve app stability and performance.</li>
            <li>Ensure security and prevent fraud.</li>
          </ul>
        </>
      ) 
    },
    { 
      number: '03', 
      title: 'Sharing of Information', 
      content: <p>We do not sell or rent your personal information to third parties. We may share data with trusted partners (such as analytics, cloud storage, or payment providers) only to operate and improve our services.</p> 
    },
    { 
      number: '04', 
      title: 'Data Security', 
      content: <p>We implement technical and organizational measures to protect your information from unauthorized access, disclosure, or loss.</p> 
    },
    { 
      number: '05', 
      title: 'Data Retention', 
      content: <p>We retain your information only as long as necessary to provide our services or as required by law.</p> 
    },
    { 
      number: '06', 
      title: 'Your Rights', 
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li>Access, update, or delete your personal data.</li>
            <li>Withdraw consent for data collection at any time.</li>
            <li>Contact us regarding privacy concerns.</li>
          </ul>
        </>
      ) 
    },
    { 
      number: '07', 
      title: 'Location Information', 
      content: (
        <>
          <p>Our application collects location data to enable the attendance check-in and check-out feature for employees:</p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
            <li>The app collects your precise location (GPS coordinates) to verify your presence at an authorized work location when you check in or check out.</li>
            <li>Location data is collected only when the application is in use, both in foreground and background modes, to ensure accurate attendance tracking.</li>
            <li>This information is used solely for attendance verification and will not be shared with third parties, except where necessary to provide core functionality (e.g., syncing data with company servers).</li>
            <li>You may disable location access at any time via your device settings; however, doing so may prevent the attendance feature from working properly.</li>
          </ul>
        </>
      ) 
    },
    { 
      number: '08', 
      title: "Children's Privacy", 
      content: <p>Our services are not intended for children under 13. We do not knowingly collect information from children.</p> 
    },
    { 
      number: '09', 
      title: 'Changes to This Policy', 
      content: <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date.</p> 
    },
    { 
      number: '10', 
      title: 'Contact Us', 
      content: (
        <>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="mt-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
            <p className="font-bold text-slate-900">YTFSOFT Co., LTD</p>
            <p>Email: info@ytfsoft.com</p>
            <p>Address: Hanoi, Vietnam</p>
          </div>
        </>
      ) 
    },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
   
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            TECHNOLOGY SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase leading-tight">
            OUR SERVICES
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto leading-relaxed">
            We provide three core tech solution groups, designed to meet all modern business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {services.map((service, index) => {
            const isPopular = service.tag !== null;
            return (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-all duration-300 relative ${isPopular ? 'border-2 border-cyan-500 shadow-xl' : 'border border-gray-100'}`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white text-xs px-4 py-1.5 rounded-full font-bold">
                    * {service.tag}
                  </div>
                )}
                
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-${service.color} mb-6 bg-slate-100`}>
                  {service.icon}
                </div>
                
                <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-1">{service.title}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{service.subTitle}</h3>
                
                <p className="text-slate-600 leading-relaxed text-sm mb-10 min-h-[80px]">
                  {service.desc}
                </p>

                <ul className="space-y-3.5 mb-10 text-left w-full text-sm">
                  {service.list.map((item, listItemIndex) => (
                    <li key={listItemIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className={`mt-auto font-bold flex items-center gap-2 text-${service.color}`}>
                  Learn More <span>&rarr;</span>
                </button>
              </div>
            );
          })}
        </div>

        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            PRIVACY PROTECTION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase leading-tight mb-4">
            Detailed Privacy Policy
          </h2>
          <p className="max-w-3xl text-sm md:text-base text-slate-600 mx-auto leading-relaxed">
            At <strong>YTFSOFT Co., LTD</strong>, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our apps, websites, and services. <br/>
            <span className="italic text-slate-500">(Effective Date: January 1, 2025)</span>
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100 max-w-5xl mx-auto">
          <div className="space-y-4">
            {policies.map((policy, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-cyan-400 bg-slate-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                  <button onClick={() => handleToggle(index)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isOpen ? 'bg-cyan-500 text-white shadow-md' : 'bg-slate-100 text-slate-500'}`}>
                            {policy.number}
                        </div>
                        <span className={`font-bold text-base md:text-lg ${isOpen ? 'text-cyan-600' : 'text-slate-900'}`}>
                            {policy.title}
                        </span>
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-100 text-cyan-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </div>
                  </button>
                  
                  <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-gray-50 mt-2 text-sm">
                        {policy.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesPolicySection;