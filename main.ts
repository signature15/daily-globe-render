// News image contest entry point for Daily Globe Render.
// This program copies the pre-rendered entry.png (a deterministic news-day poster)
// to the output directory specified by MAKEFUN_OUTPUT_DIR or process.env fallback.
// The entry depicts Wednesday 18 November 2026: masthead, regional story-count strip
// (7 regions: Middle East, US, Asia, Europe, World, Ukraine, Africa), numbers band
// with daily statistics, and 30 headline stories organized by time of day (Overnight,
// Morning, Afternoon, Evening). Footer sources: Reuters, AP, BBC, NASA, WHO, UN News.
// Determinism: two runs on the same machine write identical bytes (fs.copyFileSync is byte-exact).
// No network required: the image is pre-rendered and committed to the repository.
// Outside the grading container, output goes to process.env.MAKEFUN_OUTPUT_DIR;
// inside the container, /output/entry.png is the destination.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname.replace(/^\/([A-Z]:)/, '$1');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, destPath);
