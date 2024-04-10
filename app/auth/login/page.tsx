import {
  Link,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
const Login = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Text fontSize="xl">Login</Text>
      <FormControl>
        <Input placeholder="Doeadeer" />
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter at least 8+ characters"
          type="password"
        />
        <Button>Login</Button>
      </FormControl>
    </div>
  );
};

export default Login;
