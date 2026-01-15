type PageProps = {
  params: { slug: string };
};

export default async function GalleryItemPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="p-6 mt-10">
      <h1 className="text-2xl font-semibold">Detalle</h1>
      <p className="mt-2">Slug: {slug}</p>
    </main>
  );
}
