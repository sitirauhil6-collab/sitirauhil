import pptxgen from 'pptxgenjs';
import { SlideContent, PesantrenInfo } from '../types/presentation';

export async function exportPresentationToPptx(
  slides: SlideContent[],
  hostPesantren: PesantrenInfo | null,
  customPesantrenName?: string
) {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Ikatan Alumni Al-Azhar (OIAA) NTB & Tim Sosialisasi Pesantren';
  pptx.company = 'Universitas Al-Azhar Kairo - Cabang NTB';
  pptx.revision = '1';
  pptx.subject = 'Sosialisasi Persiapan Kuliah Universitas Al-Azhar Kairo untuk Santri NTB';
  pptx.title = 'Sosialisasi Al-Azhar Kairo - Pesantren NTB';

  const hostName = customPesantrenName || (hostPesantren ? hostPesantren.name : 'Pondok Pesantren se-Nusa Tenggara Barat');
  const hostLoc = hostPesantren ? `${hostPesantren.location}, ${hostPesantren.district}` : 'Provinsi Nusa Tenggara Barat';

  slides.forEach((slideItem, index) => {
    const slide = pptx.addSlide();

    // Dark emerald & gold theme for Al-Azhar
    const isCover = slideItem.category === 'opening';
    const isClosing = slideItem.category === 'closing';

    if (isCover || isClosing) {
      // Premium Emerald Gradient / Solid
      slide.background = { color: '064E3B' }; // Deep Royal Emerald

      // Top decorative bar
      slide.addShape(pptx.ShapeType.rect, {
        x: 0,
        y: 0,
        w: '100%',
        h: 0.25,
        fill: { color: 'D97706' }, // Gold accent
      });

      // Arabic Calligraphy / Header
      if (slideItem.arabicTitle) {
        slide.addText(slideItem.arabicTitle, {
          x: 0.8,
          y: 0.8,
          w: 11.5,
          h: 0.8,
          fontSize: 22,
          color: 'FDE68A',
          align: 'right',
          fontFace: 'Arial',
        });
      }

      // Title
      slide.addText(slideItem.title, {
        x: 0.8,
        y: 1.8,
        w: 11.5,
        h: 1.5,
        fontSize: 34,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
        wrap: true,
      });

      // Subtitle
      slide.addText(slideItem.subtitle, {
        x: 0.8,
        y: 3.4,
        w: 11.5,
        h: 0.9,
        fontSize: 16,
        color: 'A7F3D0',
        fontFace: 'Arial',
      });

      // Dedicated Host Pesantren Banner on Cover
      if (isCover) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: 4.4,
          w: 11.5,
          h: 1.3,
          fill: { color: '042F2E' },
          line: { color: 'D97706', width: 1.5 },
        });

        slide.addText(`Sosialisasi Khusus di Hadapan Santri & Asatidz:`, {
          x: 1.1,
          y: 4.55,
          w: 10.9,
          h: 0.35,
          fontSize: 13,
          color: 'FDE68A',
          fontFace: 'Arial',
        });

        slide.addText(`${hostName} (${hostLoc})`, {
          x: 1.1,
          y: 4.95,
          w: 10.9,
          h: 0.55,
          fontSize: 20,
          bold: true,
          color: 'FFFFFF',
          fontFace: 'Arial',
        });
      } else {
        // Summary for closing
        slide.addText(slideItem.summary, {
          x: 0.8,
          y: 4.4,
          w: 11.5,
          h: 1.2,
          fontSize: 15,
          color: 'FFFFFF',
          fontFace: 'Arial',
        });
      }

      // Bottom Bar
      slide.addText('Organisasi Internasional Alumni Al-Azhar (OIAA) Cabang Nusa Tenggara Barat  ·  KPMM Kairo', {
        x: 0.8,
        y: 6.8,
        w: 11.5,
        h: 0.4,
        fontSize: 11,
        color: '94A3B8',
        fontFace: 'Arial',
      });
    } else {
      // Content Slide (Clean Light Slate / Off-White background with Emerald & Gold headers)
      slide.background = { color: 'F8FAFC' };

      // Top Banner
      slide.addShape(pptx.ShapeType.rect, {
        x: 0,
        y: 0,
        w: '100%',
        h: 1.15,
        fill: { color: '064E3B' },
      });

      // Gold bottom line on header
      slide.addShape(pptx.ShapeType.rect, {
        x: 0,
        y: 1.15,
        w: '100%',
        h: 0.06,
        fill: { color: 'D97706' },
      });

      // Slide Title
      slide.addText(slideItem.title, {
        x: 0.8,
        y: 0.15,
        w: 8.5,
        h: 0.55,
        fontSize: 22,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
      });

      // Slide Subtitle
      slide.addText(slideItem.subtitle, {
        x: 0.8,
        y: 0.68,
        w: 8.5,
        h: 0.38,
        fontSize: 12,
        color: 'A7F3D0',
        fontFace: 'Arial',
      });

      // Arabic header in top right
      if (slideItem.arabicTitle) {
        slide.addText(slideItem.arabicTitle, {
          x: 8.5,
          y: 0.2,
          w: 4.0,
          h: 0.75,
          fontSize: 14,
          color: 'FDE68A',
          align: 'right',
          fontFace: 'Arial',
        });
      }

      // Left Column: Key Points
      const leftColWidth = slideItem.cards ? 6.2 : 11.5;

      // Summary Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.4,
        w: leftColWidth,
        h: 0.9,
        fill: { color: 'E2E8F0' },
        line: { color: 'CBD5E1', width: 1 },
      });

      slide.addText(slideItem.summary, {
        x: 0.95,
        y: 1.45,
        w: leftColWidth - 0.3,
        h: 0.8,
        fontSize: 12,
        color: '0F172A',
        fontFace: 'Arial',
      });

      // Bullets
      const bulletObjects = slideItem.bulletPoints.map((point) => ({
        text: point,
        options: {
          fontSize: 12,
          color: '334155',
          bullet: { type: 'bullet' as const, color: 'D97706' },
          breakLine: true,
        },
      }));

      slide.addText(bulletObjects, {
        x: 0.8,
        y: 2.45,
        w: leftColWidth,
        h: 4.3,
        fontFace: 'Arial',
      });

      // Right Column: Cards or Steps if available
      if (slideItem.cards && slideItem.cards.length > 0) {
        let cardY = 1.4;
        const cardHeight = Math.min(1.5, 4.8 / slideItem.cards.length);

        slideItem.cards.forEach((card) => {
          slide.addShape(pptx.ShapeType.roundRect, {
            x: 7.3,
            y: cardY,
            w: 5.2,
            h: cardHeight,
            fill: { color: 'FFFFFF' },
            line: { color: 'E2E8F0', width: 1 },
          });

          slide.addText(card.title, {
            x: 7.5,
            y: cardY + 0.1,
            w: 4.8,
            h: 0.3,
            fontSize: 12,
            bold: true,
            color: '064E3B',
            fontFace: 'Arial',
          });

          slide.addText(card.description, {
            x: 7.5,
            y: cardY + 0.4,
            w: 4.8,
            h: cardHeight - 0.45,
            fontSize: 10,
            color: '475569',
            fontFace: 'Arial',
          });

          cardY += cardHeight + 0.15;
        });
      } else if (slideItem.steps && slideItem.steps.length > 0) {
        let stepY = 1.4;
        slideItem.steps.forEach((step) => {
          slide.addShape(pptx.ShapeType.roundRect, {
            x: 7.3,
            y: stepY,
            w: 5.2,
            h: 1.4,
            fill: { color: 'FFFFFF' },
            line: { color: '065F46', width: 1 },
          });

          slide.addText(`${step.number}. ${step.title}`, {
            x: 7.5,
            y: stepY + 0.1,
            w: 4.8,
            h: 0.35,
            fontSize: 12,
            bold: true,
            color: '065F46',
            fontFace: 'Arial',
          });

          slide.addText(step.description, {
            x: 7.5,
            y: stepY + 0.45,
            w: 4.8,
            h: 0.85,
            fontSize: 10,
            color: '334155',
            fontFace: 'Arial',
          });

          stepY += 1.6;
        });
      }

      // Slide Footer
      slide.addText(`Slide ${index + 1} dari ${slides.length}  ·  Sosialisasi Al-Azhar di ${hostName}`, {
        x: 0.8,
        y: 7.0,
        w: 11.5,
        h: 0.3,
        fontSize: 9,
        color: '94A3B8',
        fontFace: 'Arial',
      });
    }

    // Embed rich presenter notes directly into PPTX
    const notesText = [
      `[PANDUAN PEMATERI - ESTIMASI: ${slideItem.speakerNotes.durationMinutes} MENIT]`,
      '',
      'POKOK BICARA / TALKING POINTS:',
      ...slideItem.speakerNotes.talkingPoints.map((tp, i) => `${i + 1}. ${tp}`),
      '',
      `PENEKANAN KHUSUS UNTUK SANTRI NTB:\n"${slideItem.speakerNotes.santriEmphasis}"`,
      slideItem.speakerNotes.anecdoteOrTip ? `\nTIPS / ANEKDOT:\n${slideItem.speakerNotes.anecdoteOrTip}` : '',
    ].join('\n');

    slide.addNotes(notesText);
  });

  const fileName = `Sosialisasi_Al-Azhar_${hostName.replace(/[^a-zA-Z0-9]/g, '_')}.pptx`;
  await pptx.writeFile({ fileName });
}
