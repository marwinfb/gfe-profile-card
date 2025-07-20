import Avatar from './Avatar';

function Profile() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Avatar />
      <div className="text-center space-y-1">
        <h2 className="font-medium text-xl">Sarah Dole</h2>
        <p className="text-sm">Front End Engineer @ Microsoft</p>
      </div>
      <p className="text-base text-center">
        I turn coffee into bugs which are fixed by someone else. Certified Stack
        Overflow and ChatGPT developer.
      </p>
    </div>
  );
}
export default Profile;
