import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Имя не должно содержать цифр или специальных символов',
    ),
  phone: yup
    .string()
    .test(
      'is-11-digits',
      'Номер телефона должен содержать 11 цифр',
      (value) => {
        const digitsOnly = value.replace(/\D/g, '');
        return digitsOnly.length === 11;
      },
    )
    .required('Телефон обязателен'),
  family: yup
    .string()
    .required('Фамилия обязательно')
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Фамилия не должна содержать цифр или специальных символов',
    ),
  email: yup
    .string()
    .required('Почта обязательно')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Введите корректную почту'),
  nameExcursion: yup
    .string()
    .required('Название экскурсии обязательно')
    .min(2, 'Название экскурсии должно содержать минимум 2 символа'),
  descriptionsExcursion: yup
    .string()
    .required('Описание экскурсии обязательно')
    .min(100, 'Описание экскурсии должно содержать минимум 100 символов'),
});

export default schema;
