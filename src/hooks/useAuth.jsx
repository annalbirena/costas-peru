import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');

    notifications.show({
      title: 'Sesión Cerrada',
      message: 'Se cerro la sesión.',
      color: 'cyan',
      icon: <IconCheck size={20} />,
    });

    navigate('/login');
  };
  return {
    handleLogout,
  };
};

export default useAuth;
