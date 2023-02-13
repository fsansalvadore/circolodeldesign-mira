import Image from 'next/image';
import React from 'react';
import { findByShortname } from '../../utils/common';
import tw from 'twin.macro';
import parse from 'html-react-parser';
import { Button, Link } from '../Base';

export default function ReportCard({ report }: { report: any }) {
  if (!report?.fields) return null;

  const immagine =
    findByShortname(report.fields, 'immagine')?.content?.value?.url ?? '';
  const titolo = findByShortname(report.fields, 'titolo')?.content?.value ?? '';

  // report info
  const anno = findByShortname(report.fields, 'anno')?.content?.value ?? '';
  const pagine = findByShortname(report.fields, 'pagine')?.content?.value ?? '';
  const dimensione =
    findByShortname(report.fields, 'dimensione')?.content?.value ?? '';
  const rilegatura =
    findByShortname(report.fields, 'rilegatura')?.content?.value ?? '';
  const isbn = findByShortname(report.fields, 'isbn')?.content?.value ?? '';
  const prezzo = findByShortname(report.fields, 'prezzo')?.content?.value ?? '';
  const paragrafo =
    findByShortname(report.fields, 'paragrafo')?.content?.value ?? '';
  const cta = findByShortname(report.fields, 'cta')?.content?.value ?? '';

  return (
    <div tw="mt-4 border-2 border-black rounded-lg overflow-hidden">
      {!!immagine && (
        <div tw="relative w-full h-0 paddingBottom[66%]">
          <Image
            src={immagine ?? ''}
            alt={titolo ?? ''}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={'/blur.png'}
            priority
          />
        </div>
      )}
      <div tw="space-y-4 lg:space-y-6 p-4">
        {!!titolo && <h3 tw="text-xl lg:text-3xl">{titolo}</h3>}
        <table tw="w-full sm:text-lg lg:text-xl">
          {!!anno && (
            <tr>
              <TableLabel>Anno:</TableLabel>
              <td>{anno}</td>
            </tr>
          )}
          {!!pagine && (
            <tr>
              <TableLabel>Pagine:</TableLabel>
              <td>{pagine}</td>
            </tr>
          )}
          {!!dimensione && (
            <tr>
              <TableLabel>Dimensione:</TableLabel>
              <td>{dimensione}</td>
            </tr>
          )}
          {!!rilegatura && (
            <tr>
              <TableLabel>Rilegatura:</TableLabel>
              <td>{rilegatura}</td>
            </tr>
          )}
          {!!isbn && (
            <tr>
              <TableLabel>ISBN:</TableLabel>
              <td>{isbn}</td>
            </tr>
          )}
          {!!prezzo && (
            <tr>
              <TableLabel>Prezzo:</TableLabel>
              <td>{prezzo}</td>
            </tr>
          )}
        </table>
        {!!paragrafo?.length && (
          <p tw="font-bold lg:text-xl">{parse(paragrafo)}</p>
        )}
        {!!cta && (
          <div tw="my-4 lg:mt-8">
            <Button
              as={Link}
              href={cta?.href ?? '#'}
              target={cta?.target ?? '_self'}
              size="default"
            >
              {cta?.label ?? 'Maggiori info'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

const TableLabel = tw.td`font-bold w-1/4 min-width[140px] lg:min-width[160px]`;
