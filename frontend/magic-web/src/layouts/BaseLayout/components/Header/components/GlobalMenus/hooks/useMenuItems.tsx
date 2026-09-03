import { useMemo } from "react"

export interface MenuItem {
	icon: string
	labelKey: string
	color?: string
	maskColor?: string
	badge?: "dot" | number | false
	key: MenuKey
}

export const enum MenuKey {
	SuperMagic = "superMagic",
	Flow = "flowOrchestration",
	LongTermMemory = "longTermMemory",
	ArchiveSpace = "archiveSpace",
	ShareManagement = "shareManagement",
	TimedTasks = "timedTasks",
	Preferences = "preferences",
	Chat = "chat",
	Contacts = "contacts",
	Applications = "applications",
	CloudDrive = "cloudDrive",
	KnowledgeBase = "knowledgeBase",
	Approval = "approval",
	Schedule = "schedule",
	Tasks = "tasks",
	Favorites = "favorites",
}

const iconMap = {
	[MenuKey.Flow]: "Workflow",
	[MenuKey.Chat]: "MessageSquareText",
	[MenuKey.Contacts]: "Contact",
	[MenuKey.Applications]: "LayoutGrid",
	[MenuKey.CloudDrive]: "HardDrive",
	[MenuKey.KnowledgeBase]: "BookOpen",
	[MenuKey.Approval]: "ClipboardCheck",
	[MenuKey.Schedule]: "Calendar",
	[MenuKey.Tasks]: "ListTodo",
	[MenuKey.SuperMagic]: "Sparkles",
	[MenuKey.Favorites]: "Star",
	[MenuKey.ArchiveSpace]: "Archive",
	[MenuKey.ShareManagement]: "Share2",
	[MenuKey.LongTermMemory]: "Brain",
	[MenuKey.TimedTasks]: "Timer",
	[MenuKey.Preferences]: "Settings",
}

function useMenuItems() {
	return useMemo<MenuItem[]>(
		() => [
			{ icon: iconMap[MenuKey.Chat], labelKey: "globalMenus.instantMessaging", key: MenuKey.Chat },
			{ icon: iconMap[MenuKey.Contacts], labelKey: "globalMenus.contacts", key: MenuKey.Contacts },
			{ icon: iconMap[MenuKey.Schedule], labelKey: "globalMenus.schedule", key: MenuKey.Schedule },
			{ icon: iconMap[MenuKey.Tasks], labelKey: "globalMenus.tasks", key: MenuKey.Tasks },
			{ icon: iconMap[MenuKey.CloudDrive], labelKey: "globalMenus.cloudDrive", key: MenuKey.CloudDrive },
			{ icon: iconMap[MenuKey.KnowledgeBase], labelKey: "globalMenus.knowledgeBase", key: MenuKey.KnowledgeBase },
			{ icon: iconMap[MenuKey.Approval], labelKey: "globalMenus.approval", key: MenuKey.Approval },
			{ icon: iconMap[MenuKey.Applications], labelKey: "globalMenus.applications", key: MenuKey.Applications },
			{ icon: iconMap[MenuKey.Flow], labelKey: "globalMenus.flowOrchestration", key: MenuKey.Flow },
			{ icon: iconMap[MenuKey.SuperMagic], labelKey: "globalMenus.superMagic", key: MenuKey.SuperMagic },
			{ icon: iconMap[MenuKey.Favorites], labelKey: "globalMenus.favorites", key: MenuKey.Favorites },
			{ icon: iconMap[MenuKey.TimedTasks], labelKey: "globalMenus.timedTasks", key: MenuKey.TimedTasks },
			{ icon: iconMap[MenuKey.ShareManagement], labelKey: "globalMenus.shareManagement", key: MenuKey.ShareManagement },
			{ icon: iconMap[MenuKey.ArchiveSpace], labelKey: "globalMenus.archiveSpace", key: MenuKey.ArchiveSpace },
			{ icon: iconMap[MenuKey.LongTermMemory], labelKey: "globalMenus.longTermMemory", key: MenuKey.LongTermMemory },
			{ icon: iconMap[MenuKey.Preferences], labelKey: "globalMenus.preferences", key: MenuKey.Preferences },
		],
		[],
	)
}

export default useMenuItems
