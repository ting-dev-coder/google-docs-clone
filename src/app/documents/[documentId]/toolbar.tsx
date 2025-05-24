"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/stores/use-editor-store";
import { BoldIcon, ItalicIcon, ListTodoIcon, LucideIcon, MessageSquarePlusIcon, PrinterIcon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from "lucide-react";

interface ToolbarButton {
	onClick: () => void;
	isActive?: boolean;
	icon: LucideIcon;
}

// function FontFamilyButton() {}

function ToolbarButton({ onClick, isActive, icon: Icon }: ToolbarButton) {
	return (
		<button onClick={onClick} className={cn("text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80", isActive && "bg-neutral-200/80")}>
			<Icon className={"size-4"} />
		</button>
	);
}

const Toolbar = () => {
	const { editor } = useEditorStore();

	const sections: {
		label: string;
		icon: LucideIcon;
		onClick: () => void;
		isActive?: boolean;
	}[][] = [
		[
			{
				label: "Undo",
				icon: Undo2Icon,
				onClick: () => editor?.chain().focus().undo().run(),
			},
			{
				label: "Print",
				icon: PrinterIcon,
				onClick: () => window.print,
			},
			{
				label: "Spell Check",
				icon: SpellCheckIcon,
				onClick: () => {
					const current = editor?.view.dom.getAttribute("spellcheck");
					editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
				},
			},
		],
		[
			{
				label: "Bold",
				icon: BoldIcon,
				isActive: editor?.isActive("bold"),
				onClick: () => editor?.chain().focus().toggleBold().run(),
			},
			{
				label: "Italic",
				icon: ItalicIcon,
				isActive: editor?.isActive("italic"),
				onClick: () => editor?.chain().focus().toggleItalic().run(),
			},
			{
				label: "Underline",
				icon: UnderlineIcon,
				isActive: editor?.isActive("underline"),
				onClick: () => editor?.chain().focus().toggleUnderline().run(),
			},
		],
		[
			{
				label: "Comment",
				icon: MessageSquarePlusIcon,
				onClick: () => console.log("TODO: comment"),
				isActive: false,
			},
			{
				label: "List Todo",
				icon: ListTodoIcon,
				onClick: () => editor?.chain().focus().toggleTaskList().run(),
				isActive: editor?.isActive("taskList"),
			},
			{
				label: "Remove Formatting",
				icon: RemoveFormattingIcon,
				onClick: () => editor?.chain().focus().unsetAllMarks().run(),
				isActive: editor?.isActive("taskList"),
			},
		],
	];
	return (
		<div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
			{sections[0].map((item) => (
				<ToolbarButton key={item.label} {...item} />
			))}
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />

			{/* TODO: Font size */}

			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			{/* TODO: Heading */}
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			{/* TODO: Font size */}
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			{sections[1].map((item) => (
				<ToolbarButton key={item.label} {...item} />
			))}
			{/* TODO: Text color */}
			{/* TODO: Highlight color */}

			{/* TODO: Link */}
			{/* TODO: Image */}
			{/* TODO: Align */}
			{/* TODO: Line height */}
			{/* TODO: List */}
			{sections[2].map((item) => (
				<ToolbarButton key={item.label} {...item} />
			))}
		</div>
	);
};

export default Toolbar;
