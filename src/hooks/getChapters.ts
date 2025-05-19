const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getChapters() {
    const res = await fetch(`${apiUrl}/chapters`, {
    // Указываем, что fetch должен кешировать результат
    next: { revalidate: 60 }, // перезагружать кэш через 60 секунд
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}