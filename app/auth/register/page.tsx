import { Button, Input } from "@chakra-ui/react";

const Register = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input
        placeholder="jane.doe@email.com"
        type="email"
      />
      <Input placeholder="Doeadeer" />
      <Input
        placeholder="Enter at least 8+ characters"
        type="password"
      />
    </div>
  );
};

export default Register;
