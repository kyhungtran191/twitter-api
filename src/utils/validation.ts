import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ContextRunner, ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'

// can be reused by many routes
export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // sequential processing, stops running validations chain if one fails.
    await validations.run(req)
    const error = validationResult(req)
    if (error.isEmpty()) return next()
    res.status(400).json({ errors: error.mapped() })
    next()
  }
}
