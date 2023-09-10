import { Button, Input } from '@/components';
import { Controller, useForm } from 'react-hook-form';

interface PropsLogin {
  phone: string;
  password: string;
}

export const Login = () => {
  const { control, handleSubmit } = useForm<PropsLogin>({
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  return (
    <div className="m-auto flex justify-center items-center flex-col p-10 font-bold h-96">
      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={() => <Input placeholder="Telefone" />}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={() => <Input placeholder="Senha" />}
      />
      <Button>Entrar</Button>
      <span className="font-light">Ou</span>
      <Button>Cadastrar</Button>
    </div>
  );
};

export default Login;
