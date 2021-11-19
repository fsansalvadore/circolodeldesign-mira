import React, { useState } from 'react';
import 'twin.macro';
import { StyledTextarea, StyledField, Link } from '../components/Base';
import Uploader from 'rsuite/Uploader';
import Checkbox from '@uidu/checkbox';
import FieldText from '@uidu/field-text';

export default function FieldRenderer({ input, index, name }) {
  const { field } = input;
  const formInputsProps = {
    name: input.id,
    layout: 'elementOnly',
    required: input.required,
  };

  if (input.hidden)
    return (
      <FieldText
        type="hidden"
        value={`Nuovo messaggio da Form: ${name}`}
        {...formInputsProps}
      />
    );

  switch (field.kind) {
    case 'string':
      return (
        <StyledField
          type={input.hidden === true ? 'hidden' : field.kind}
          placeholder={`${input.label}${input.required ? '*' : ''}`}
          {...formInputsProps}
        />
      );
    case 'email':
    case 'tel':
    case 'phone':
      return (
        <StyledField
          type={input.hidden === true ? 'hidden' : field.kind}
          placeholder={`${input.label}${input.required ? '*' : ''}`}
          {...formInputsProps}
        />
      );
    case 'text':
      return (
        <StyledTextarea
          placeholder={`${input.label}${input.required ? '*' : ''}`}
          {...formInputsProps}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          label={
            <p tw="text-14">
              Ho letto e accettato l’
              <Link href="privacy" tw="underline! hover:text-cyan-600!">
                informativa sulla privacy
              </Link>
              .*
            </p>
          }
          layout="elementOnly"
          tw="mt-5"
          {...formInputsProps}
        />
      );
    case 'attachments':
      return <FileUploader {...formInputsProps} />;
    default:
      return null;
  }
}

const FileUploader = (props) => {
  const [file, setFile] = useState(null);
  return (
    <Uploader
      action=""
      draggable
      onSuccess={(_response, file) => setFile(file)}
      headers
    >
      <div tw="bg-gray-100! relative! rounded-lg! h-100! flex! flex-col! items-center! justify-center! text-center! z-10!">
        <p tw="mb-10 text-14!">Carica il tuo cv</p>
        <p tw="text-12!">PDF Max. 5MB</p>
        {/* <FieldText
          type="file"
          value={file}
          {...props}
          tw="absolute! z-behind! left[-9999]! w-0 h-0 invisible pointer-events-none!"
        /> */}
      </div>
    </Uploader>
  );
};
