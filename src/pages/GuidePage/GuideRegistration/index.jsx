import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import schema from 'utils/validationShema';

import './style.scss';

const GuideRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <section className='guide-registration' id='form'>
      <div className='container'>
        <form
          className='guide-registration__form guide-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className='guide-form__fieldset'>
            <legend className='guide-form__head'>Регистрация гида</legend>
            <label className='guide-form__label'>
              <input
                type='text'
                className='guide-form__input'
                placeholder='Ваше имя'
                {...register('name')}
              />
              {errors.name && (
                <span className='guide-form__error'>{errors.name.message}</span>
              )}
            </label>
            <label className='guide-form__label'>
              <input
                type='text'
                className='guide-form__input'
                placeholder='Ваша фамилия'
                {...register('family')}
              />
              {errors.family && (
                <span className='guide-form__error'>
                  {errors.family.message}
                </span>
              )}
            </label>
            <label className='guide-form__label'>
              <input
                type='email'
                className='guide-form__input'
                placeholder='e-mail'
                {...register('email')}
              />
              {errors.email && (
                <span className='guide-form__error'>
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className='guide-form__label'>
              <input
                type='tel'
                className='guide-form__input'
                placeholder='Ваш телефон'
                {...register('phone')}
              />
              {errors.phone && (
                <span className='guide-form__error'>
                  {errors.phone.message}
                </span>
              )}
            </label>
          </fieldset>
          <fieldset className='guide-form__fieldset'>
            <label className='guide-form__label guide-form__label--ex'>
              <input
                name='nameExcursion'
                type='text'
                className='guide-form__input'
                placeholder='Название Вашей экскурсии'
                {...register('nameExcursion')}
              />
              {errors.nameExcursion && (
                <span className='guide-form__error'>
                  {errors.nameExcursion.message}
                </span>
              )}
            </label>
            <label className='guide-form__label guide-form__label--ex'>
              <textarea
                name='descriptionsExcursion'
                className='guide-form__textarea'
                placeholder='Описание экскурсии'
                {...register('descriptionsExcursion')}
              ></textarea>
              {errors.descriptionsExcursion && (
                <span className='guide-form__error'>
                  {errors.descriptionsExcursion.message}
                </span>
              )}
            </label>
          </fieldset>
          <button className='guide-form__btn' type='submit' disabled={!isValid}>
            Отправить заявку
          </button>
          <span className='guide-form__police'>
            Отправляя заявку, вы принимаете
            <a href='!#' className='guide-form__police-link'>
              условия.
            </a>
          </span>
        </form>
      </div>
    </section>
  );
};

export { GuideRegistration };
