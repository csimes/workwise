import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Text,
  Link,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <div>
      <Text fontSize="xl">Create an account</Text>
      <Link href="/">Home</Link>
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Last name" />
        <FormLabel>Email address</FormLabel>
        <Input
          placeholder="jane.doe@email.com"
          type="email"
        />
        <FormLabel>Username</FormLabel>
        <Input placeholder="Doeadeer" />
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter at least 8+ characters"
          type="password"
        />
        <Button>Sign Up</Button>
      </FormControl>
    </div>
  );
};

export default Register;
