import * as yup from 'yup'

export const formValidation = yup.object().shape({
  nickname: yup.string().min(1).max(30).matches(/^[a-zA-Zа-яА-Я0-9]+$/).required(),
  name: yup.string().min(1).max(50).matches(/^[a-zA-Zа-яА-Я]+$/).required(),
  sername: yup.string().min(1).max(50).matches(/^[a-zA-Zа-яА-Я]+$/).required(),
  sex: yup.string().matches('male' || 'female').required(),
  advantages: yup.array().of(yup.string()).required(),
  checkbox: yup.array().of(yup.string()).required(),
  radio: yup.string().required(),
  about: yup.string().max(200).required(),
})