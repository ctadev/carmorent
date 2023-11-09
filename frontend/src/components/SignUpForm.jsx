import { FormInput, Button } from "../components";

const SignUpForm = ({
  handleSignUp,
  handleSignUpClick,
  userForm,
  setUserForm,
}) => {
  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSignUp}>
      <h4 className="mt-8 text-[#3563E9] text-xl font-extrabold mb-6">
        Sign Up
      </h4>
      <p className="text-sm">
        Already have an account?{" "}
        <span
          className="text-[#3D5278] cursor-pointer"
          onClick={handleSignUpClick}
        >
          Sign in
        </span>
      </p>
      <FormInput
        keyName="username"
        type="text"
        name="Username"
        setUserForm={setUserForm}
        userForm={userForm}
        value={userForm.username}
      />
      <FormInput
        keyName="password"
        type="password"
        name="Password"
        setUserForm={setUserForm}
        userForm={userForm}
        value={userForm.password}
      />
      <FormInput
        keyName="firstName"
        type="text"
        name="First Name"
        setUserForm={setUserForm}
        userForm={userForm}
        value={userForm.firstName}
      />
      <FormInput
        keyName="lastName"
        type="text"
        name="Last Name"
        setUserForm={setUserForm}
        userForm={userForm}
        value={userForm.lastName}
      />
      <FormInput
        keyName="title"
        type="text"
        name="Title"
        setUserForm={setUserForm}
        userForm={userForm}
        value={userForm.title}
      />
      <div className="flex flex-col">
        <h3 className="font-medium text-lg mb-4">Profile Picture</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setUserForm({ ...userForm, file: e.target.files[0] });
          }}
        />
      </div>
      <Button text="Sign Up" size="large" rounded full type="submit" />
    </form>
  );
};

export default SignUpForm;
