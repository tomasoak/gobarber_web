import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo, </span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 10</span>
            <span>Sexxxta-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/25818342?s=460&u=4b80f73a0f5f0cf6e3333526ba47452671ca0639&v=4"
                alt="user"
              />

              <strong>Tomás Carvalho</strong>
              <span>
                <FiClock />
                09:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                10:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/25818342?s=460&u=4b80f73a0f5f0cf6e3333526ba47452671ca0639&v=4"
                  alt="user"
                />

                <strong>Tomás Carvalho</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                15:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/25818342?s=460&u=4b80f73a0f5f0cf6e3333526ba47452671ca0639&v=4"
                  alt="user"
                />

                <strong>Tomás Carvalho</strong>
              </div>
            </Appointment>
          </Section>
          <Calendar />
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
