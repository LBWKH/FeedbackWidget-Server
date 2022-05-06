import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

describe('Submit Feedback', () => {
  test('if it submibs a feedback', async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async() => {}},
      { sendMail: async() => {}}
    )

    await expect(submitFeedback.execute({type: 'BUG', comment: 'example comment', screenshot: 'blabla.jpg'})).resolves.not.toThrow()
  })
})