import { getVaultItems } from "@/lib/actions/vault";
import { VaultList } from "@/components/vault-list";

export const dynamic = "force-dynamic";

export default async function VaultPage() {
  const items = await getVaultItems();
  
  // Format dates for client component
  const formattedItems = items.map(item => ({
    ...item,
    createdAt: new Date(item.createdAt),
  }));

  return (
    <div className="mx-auto max-w-6xl">
      <VaultList initialItems={formattedItems} />
    </div>
  );
}
