
import { GoogleGenAI, Type } from "@google/genai";
import type { PostIdea } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const postIdeaSchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "A creative and engaging blog post title."
        },
        summary: {
            type: Type.STRING,
            description: "A concise, two-sentence summary of the proposed blog post."
        }
    },
    required: ["title", "summary"]
};

export const generatePostIdea = async (topic: string): Promise<PostIdea> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a blog post idea for the topic: "${topic}".`,
            config: {
                responseMimeType: "application/json",
                responseSchema: postIdeaSchema
            }
        });

        const jsonText = response.text.trim();
        const idea = JSON.parse(jsonText) as PostIdea;
        return idea;
    } catch (error) {
        console.error("Error generating post idea:", error);
        throw new Error("Failed to generate a post idea from the AI. Please try again.");
    }
};

export const generateFullPostStream = async (title: string) => {
    try {
        const result = await ai.models.generateContentStream({
            model: "gemini-2.5-flash",
            contents: `Write a full, engaging, and well-structured blog post based on the title: "${title}". The post should have an introduction, several paragraphs for the main body, and a conclusion. Use Markdown for formatting headings, lists, and bold/italic text. Do not include a title header, as it is already provided.`,
            config: {
              thinkingConfig: { thinkingBudget: 0 }
            }
        });
        return result;
    } catch (error) {
        console.error("Error generating full post:", error);
        throw new Error("Failed to generate the full post from the AI. Please try again.");
    }
};
