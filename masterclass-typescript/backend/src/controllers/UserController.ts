//Lista todos os usuarios
import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Tiago', email: 'tiagosardi@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Tiago Sardi', 
        email: 'tiagosardi@gmail.com'
      },
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem-vindo'
      }
    });

    return res.send();
  }
};
