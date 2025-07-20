import socialLinks from '../data/socialLinks';

function Socials() {
  return (
    <ul className="flex justify-center items-center gap-x-4">
      {socialLinks.map((socials) => (
        <li key={socials.name} className="flex justify-center items-center">
          <a href={socials.url} className="inline-flex items-center justify-center w-10 h-10 text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg p-2.5">{socials.icon}</a>
        </li>
      ))}

    </ul>
  );
}
export default Socials;
