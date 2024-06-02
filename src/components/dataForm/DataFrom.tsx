import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AMENITIES, Data, dataSchema } from '../../validations/dataSchema';
import ButtonSubmit from '../buttonSubmit/ButtonSubmit';
import Input from '../common/Input';
import style from './DataForm.module.css';

const DataFrom = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Data>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      amenities: [],
    },
  });
  console.log(errors);
  const onHandleSubmit: SubmitHandler<Data> = (data) => {
    const obejestToSend = {
      ...data,
      test: 'Test',
    };
    console.log(obejestToSend);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
      <Input
        label="Date of birth"
        error={errors['birthday']}
        id="birthday"
        type="date"
        placeholder="yoru birthday"
        {...register('birthday')}
      />
      <Input
        label="Date of birth"
        error={errors['checkIn']}
        type="datetime-local"
        id="checkIn"
        placeholder="youtr date of birth example: 1990-01-01"
        {...register('checkIn')}
      />
      <Controller
        name="amenities"
        control={control}
        render={({ field }) => (
          <div className={style.ships}>
            <div className={style.ships__list}>
              {AMENITIES.map((amenity) => (
                <span
                  key={amenity}
                  className={`${style.ship} ${field.value?.includes(amenity) ? style.ship__selected : ''}`}
                  onClick={() => {
                    if (field.value?.includes(amenity)) {
                      field.onChange(field.value.filter((v: string) => v !== amenity));
                    } else {
                      field.onChange([...(field.value || []), amenity]);
                    }
                  }}
                >
                  {amenity}
                </span>
              ))}
            </div>
            <span className={style.row__message}>{errors.amenities?.message} </span>
          </div>
        )}
      />
      <ButtonSubmit label={'send'} />
    </form>
  );
};

export default DataFrom;
