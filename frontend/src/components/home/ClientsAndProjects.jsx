import React from 'react';
import { Quote } from 'lucide-react';
import { clients } from '../../data/clientsData'; // Import our client data

const ClientsAndProjects = () => {
  return (
    <section className="bg-zinc-900 py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Our Clients and Projects
          </span>
        </h2>
      </div>

      {/* The scrolling container */}
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:[animation-play-state:paused]">
          {/* We render the list of clients twice for the seamless loop */}
          {clients.map((client, index) => (
            <li key={index} className="flex-shrink-0 w-96">
              <div className="flex flex-col items-center">
                {/* Testimonial Bubble */}
                <div className="relative bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <Quote className="absolute top-3 left-3 w-8 h-8 text-white/20" />
                  <div className="relative pl-4 text-sm leading-relaxed">
                    {Array.isArray(client.testimonial) ? (
                      <ul className="space-y-2 list-disc list-inside">
                        {client.testimonial.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    ) : (
                      <p>{client.testimonial}</p>
                    )}
                  </div>
                  {/* The tail of the bubble */}
                  <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-red-600"></div>
                </div>
                
                {/* Client Logo and Name */}
                <div className="mt-8 text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="h-20 w-20 object-contain" />
                  </div>
                  <p className="mt-4 font-bold text-white">{client.name}</p>
                </div>
              </div>
            </li>
          ))}
          {/* Duplicate the list for the seamless scroll effect */}
          {clients.map((client, index) => (
            <li key={`duplicate-${index}`} className="flex-shrink-0 w-96">
               <div className="flex flex-col items-center">
                {/* Testimonial Bubble */}
                <div className="relative bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <Quote className="absolute top-3 left-3 w-8 h-8 text-white/20" />
                  <div className="relative pl-4 text-sm leading-relaxed">
                    {Array.isArray(client.testimonial) ? (
                      <ul className="space-y-2 list-disc list-inside">
                        {client.testimonial.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    ) : (
                      <p>{client.testimonial}</p>
                    )}
                  </div>
                  <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-red-600"></div>
                </div>
                
                {/* Client Logo and Name */}
                <div className="mt-8 text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-md flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="h-20 w-20 object-contain" />
                  </div>
                  <p className="mt-4 font-bold text-white">{client.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsAndProjects;