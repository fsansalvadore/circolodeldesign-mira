import Image from 'next/image';
import React from 'react';
import { findByShortname } from '../../utils/common';
import tw from 'twin.macro';
import parse from 'html-react-parser';
import { Button, Link } from '../Base';

export default function ReportCard({ report }: { report: any }) {
  const immagine =
    findByShortname(report.fields, 'immagine')?.content?.value?.url ?? '';
  const titolo =
    findByShortname(report.fields, 'titolo-etichetta')?.content?.value ?? '';

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

  console.log('immagine', immagine);
  console.log('cta', cta);
  return (
    <div tw="mt-4 border-2 border-black space-y-2 lg:space-y-4 rounded-lg overflow-hidden">
      {!!immagine && (
        <div tw="relative w-full h-0 paddingBottom[66%]">
          <Image
            src={immagine ?? ''}
            alt={titolo}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}
      <div tw="space-y-4 lg:space-y-6 p-4">
        {!!titolo && <h3>{titolo}</h3>}
        <table tw="w-full">
          {!!anno && (
            <TableRow>
              <TableLabel>Anno:</TableLabel>
              <td>{anno}</td>
            </TableRow>
          )}
          {!!pagine && (
            <TableRow>
              <TableLabel>Pagine:</TableLabel>
              <td>{pagine}</td>
            </TableRow>
          )}
          {!!dimensione && (
            <TableRow>
              <TableLabel>Dimensione:</TableLabel>
              <td>{dimensione}</td>
            </TableRow>
          )}
          {!!rilegatura && (
            <TableRow>
              <TableLabel>Rilegatura:</TableLabel>
              <td>{rilegatura}</td>
            </TableRow>
          )}
          {!!isbn && (
            <TableRow>
              <TableLabel>ISBN:</TableLabel>
              <td>{isbn}</td>
            </TableRow>
          )}
          {!!prezzo && (
            <TableRow>
              <TableLabel>Prezzo:</TableLabel>
              <td>{prezzo}</td>
            </TableRow>
          )}
        </table>
        {!!paragrafo && <p tw="font-bold">{parse(paragrafo)}</p>}
        {!!cta && (
          <div tw="my-4 lg:mt-8">
            <Button
              as={Link}
              href={cta.href}
              target={cta.target}
              size="default"
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

const TableRow = tw.tr``;
const TableLabel = tw.td`font-bold w-1/4`;
