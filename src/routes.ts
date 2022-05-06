import express from 'express'
import nodemailer from 'nodemailer' 
import { NodeMailerAdapter } from './adapters/nodeMailer/nodeMailerAdapter';
import { prisma } from './prisma'
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from './useCases/submitFeedbackUseCase';
export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodeMailerMailAdapter = new NodeMailerAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository, nodeMailerMailAdapter
  )

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})