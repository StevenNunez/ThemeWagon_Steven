const Team = () => {
  const team = [
    {
      name: 'John Adams',
      role: 'CEO',
      photo: '/team/image1.png',
      social: { twitter: '#', linkedin: '#', facebook: '#' },
    },
    {
      name: 'Carrey Johnson',
      role: 'Senior Developer',
      photo: '/team/image2.png',
      social: { twitter: '#', linkedin: '#', facebook: '#' },
    },
    {
      name: 'Ray Marie',
      role: 'Developer',
      photo: '/team/image3.png',
      social: { twitter: '#', linkedin: '#', facebook: '#' },
    },
    {
      name: 'Austin Min',
      role: 'Designer',
      photo: '/team/image4.png',
      social: { twitter: '#', linkedin: '#', facebook: '#' },
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
          Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12">
          people from varios origins.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-40 h-60 object-cover rounded-2xl mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <div className="flex justify-center space-x-4"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="text-sm font-medium px-6 py-2 border border-blue-400 text-blue-500 rounded-full hover:bg-blue-50 transition">
          View full team
        </button>
      </div>
    </section>
  );
};

export default Team;