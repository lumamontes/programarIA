import {
  Code,
  LucideIcon,
  MessageSquare,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  CircleUserRound,
} from 'lucide-react';

interface ITools {
  label: string;
  icon: LucideIcon;
  href: string;
  color: string;
  bgColor: string;
  description: string;
  empty: string;
  placeholder: string;
}

interface IRoutes {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
  bgColor?: string;
}

export const conversationDetails: ITools = {
  label: 'Chatbot',
  icon: MessageSquare,
  href: '/conversation',
  color: 'text-orange-500',
  bgColor: 'bg-orange-500/10',
  description: 'Nosso modelo de conversa',
  empty: 'Nenhuma conversa iniciada',
  placeholder: 'Como calcular o raio de um círculo?',
};

export const codeDetails: ITools = {
  label: 'Gerador de código',
  icon: Code,
  href: '/code',
  color: 'text-green-700',
  bgColor: 'bg-green-700/10',
  description: 'Gere códigos usando um texto descritivo',
  empty: 'Nenhum código gerado',
  placeholder: 'Uma função com JS para definir se o mês tem 31 dias',
};

export const adaDetails: ITools = {
  label: 'Converse com Ada Lovelace',
  icon: CircleUserRound,
  href: '/ada',
  color: 'text-pink-700',
  bgColor: 'bg-pink-700/10',
  description: 'Converse com o chatbot de Ada Lovelace',
  empty: 'Nenhuma conversa iniciada',
  placeholder: 'Quem é você?',
};

export const tools: IRoutes[] = [
  { ...conversationDetails },
  { ...codeDetails },
  { ...adaDetails}
];

export const routes: IRoutes[] = [...tools];

export const socials = [
  {
    label: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/lumamontes/',
    color: 'text-blue-600',
  },
  {
    label: 'github',
    icon: Github,
    href: 'https://github.com/lumamontes',
    color: 'text-white-500',
  },
  {
    label: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/l.gmontes',
    color: 'text-violet-500',
  },
  {
    label: 'twitter',
    icon: Twitter,
    href: 'https://twitter.com/monnlu1',
    color: 'text-blue-300',
  },
];
