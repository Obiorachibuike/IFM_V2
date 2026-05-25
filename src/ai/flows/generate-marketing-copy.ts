'use server';
/**
 * @fileOverview A Genkit flow for generating compelling, 'investor-ready', and 'cinematic' marketing copy
 * for various website sections of the IFM game.
 *
 * - generateMarketingCopy - A function that handles the marketing copy generation process.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  sectionType: z
    .string()
    .describe(
      'The type of website section for which to generate copy (e.g., "ecosystem benefits", "NFT club perks", "roadmap phases").'
    ),
  keyPoints: z
    .array(z.string())
    .describe(
      'An array of key features, benefits, or information points to include in the copy.'
    ),
  tone: z
    .enum([
      'premium',
      'immersive',
      'football-focused',
      'blockchain-native',
      'investor-ready',
      'esports-grade',
      'cinematic',
      'modern-aaa-quality',
    ])
    .describe(
      "The desired tone for the marketing copy. Must align with IFM's brand direction."
    ),
  length: z
    .enum(['short', 'medium', 'long'])
    .describe('Desired length of the generated copy.'),
});
export type GenerateMarketingCopyInput = z.infer<
  typeof GenerateMarketingCopyInputSchema
>;

const GenerateMarketingCopyOutputSchema = z.object({
  copy: z.string().describe('The generated marketing copy.'),
});
export type GenerateMarketingCopyOutput = z.infer<
  typeof GenerateMarketingCopyOutputSchema
>;

export async function generateMarketingCopy(
  input: GenerateMarketingCopyInput
): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: { schema: GenerateMarketingCopyInputSchema },
  output: { schema: GenerateMarketingCopyOutputSchema },
  prompt: `You are an expert marketing copywriter for a futuristic Blockchain Football Manager Game called "IFM".
Your goal is to create compelling, 'investor-ready', and 'cinematic' marketing copy that aligns with the brand direction.

CRITICAL ARCHITECTURAL RULE:
This website MUST NOT include a functional marketplace UI. All economic systems should be presented as conceptual ecosystem explanations, not transactional interfaces. Do not generate copy that implies direct 'buy now' buttons for players or items; focus on ownership narratives and ecosystem participation.

OVERALL BRAND DIRECTION:
"Football Manager meets Web3 esports startup." Not cartoonish, not casual gaming, not mobile-game style.

DESIGN LANGUAGE:
elite football presentation, futuristic blockchain visuals, esports broadcast aesthetics, modern startup UX, cinematic sports storytelling.

STYLE:
dark futuristic football atmosphere, modern Web3 branding, cinematic stadium environments, sleek sports-tech aesthetic, minimal but premium, immersive.

OVERALL FEEL:
Champions League broadcast graphics, elite football atmosphere, blockchain gaming ecosystem, modern startup branding, cinematic hero sections, premium Web3 sports company, tactical football presentation, immersive stadium environments.

TYPOGRAPHY:
bold sports typography, modern sans-serif fonts, clean readability, esports-style headings, large cinematic hero text.

Generate marketing copy for the following:

Section Type: {{{sectionType}}}
Desired Tone: {{{tone}}}
Desired Length: {{{length}}}

Key Points to include:
{{#each keyPoints}}- {{{this}}}
{{/each}}

Ensure the copy is engaging, highlights benefits, and conveys the premium, immersive, and investor-ready nature of IFM.`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
