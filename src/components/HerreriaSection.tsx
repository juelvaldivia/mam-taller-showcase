
import { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Camera } from 'lucide-react';

const HerreriaSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Herrería projects data
  const herreriaProjects = [
    {
      id: 'casa-mucha',
      name: 'Casa Mucha / Rin Tin Tin',
      architect: 'Estudio Arquitectura Moderna',
      photographer: 'Luis García Photography',
      year: '2023',
      location: 'Guadalajara, Jalisco',
      description: 'Proyecto residencial con herrería contemporánea que integra elementos estructurales y decorativos.',
      images: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800'
      ]
    },
    {
      id: 'xx-noviembre',
      name: 'XX de Noviembre',
      architect: 'Taller de Arquitectura Urbana',
      photographer: 'María Fernández',
      year: '2023',
      location: 'Guadalajara, Jalisco',
      description: 'Intervención en fachada con elementos de herrería que respetan el contexto urbano.',
      images: [
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800'
      ]
    },
    {
      id: 'casa-justo-sierra',
      name: 'Casa Justo Sierra',
      architect: 'Arquitectos Asociados GDL',
      photographer: 'Roberto Sánchez',
      year: '2022',
      location: 'Guadalajara, Jalisco',
      description: 'Rehabilitación con elementos de herrería que combinan tradición y modernidad.',
      images: [
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800'
      ]
    },
    {
      id: 'casa-san-ignacio',
      name: 'Casa San Ignacio',
      architect: 'Estudio Verde Arquitectura',
      photographer: 'Ana López Photography',
      year: '2022',
      location: 'Guadalajara, Jalisco',
      description: 'Proyecto de vivienda unifamiliar con herrería artística integrada al diseño arquitectónico.',
      images: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800'
      ]
    },
    {
      id: 'vulcanos-chapalita',
      name: 'Vulcanos Chapalita',
      architect: 'Grupo Arquitectónico Vulcanos',
      photographer: 'Carlos Mendoza',
      year: '2023',
      location: 'Zapopan, Jalisco',
      description: 'Desarrollo habitacional con herrería personalizada para cada unidad.',
      images: [
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800'
      ]
    },
    {
      id: 'el-particular',
      name: 'El Particular',
      architect: 'Taller Particular',
      photographer: 'Sofia Rivera',
      year: '2023',
      location: 'Guadalajara, Jalisco',
      description: 'Espacio comercial con herrería decorativa que define la identidad del lugar.',
      images: [
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800'
      ]
    }
  ];

  const openProject = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      const project = herreriaProjects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => 
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const project = herreriaProjects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      }
    }
  };

  const selectedProjectData = selectedProject 
    ? herreriaProjects.find(p => p.id === selectedProject)
    : null;

  return (
    <section id="herreria" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-iron-900 mb-6">
            Herrería Habitacional
          </h2>
          <p className="text-xl text-iron-600 max-w-3xl mx-auto">
            Proyectos de herrería arquitectónica que complementan y realzan 
            cada espacio habitacional con soluciones estructurales y decorativas únicas.
          </p>
        </div>

        {!selectedProject ? (
          // Project Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {herreriaProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-iron-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-iron-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-iron-500">
                    <span>{project.year}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Project Detail View
          selectedProjectData && (
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedProjectData.images[currentImageIndex]}
                  alt={selectedProjectData.name}
                  className="w-full h-96 md:h-[600px] object-cover"
                />
                
                {selectedProjectData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-all shadow-lg"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-all shadow-lg"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <div className="absolute top-4 left-4">
                  <button
                    onClick={closeProject}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full px-4 py-2 transition-all shadow-lg"
                  >
                    ← Volver
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProjectData.images.length}
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-playfair font-bold text-iron-900 mb-4">
                      {selectedProjectData.name}
                    </h2>
                    <p className="text-lg text-iron-600 mb-6 leading-relaxed">
                      {selectedProjectData.description}
                    </p>
                    
                    {selectedProjectData.images.length > 1 && (
                      <div className="flex space-x-2 mb-6">
                        {selectedProjectData.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-iron-900' : 'bg-iron-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-iron-800 uppercase tracking-wider mb-2">
                        Detalles del Proyecto
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-iron-600">Año:</span>
                          <span className="ml-2 font-medium">{selectedProjectData.year}</span>
                        </div>
                        <div>
                          <span className="text-iron-600">Ubicación:</span>
                          <span className="ml-2 font-medium">{selectedProjectData.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-iron-800 uppercase tracking-wider mb-3">
                        Créditos
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <User size={16} className="text-iron-500 mt-1" />
                          <div>
                            <div className="text-sm text-iron-600">Arquitecto</div>
                            <div className="font-medium">{selectedProjectData.architect}</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Camera size={16} className="text-iron-500 mt-1" />
                          <div>
                            <div className="text-sm text-iron-600">Fotografía</div>
                            <div className="font-medium">{selectedProjectData.photographer}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HerreriaSection;
