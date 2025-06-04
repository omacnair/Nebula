/*const TELEGRAM_BOT_TOKEN = '7977103030:AAG61xk4yIPdBH3ho-7tQNrT8z5Uo80cMA4';

export async function fetchTelegramNews() {
  try {
    // Шаг 1: Получаем обновления
    const updatesResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`
    );
    const updatesData = await updatesResponse.json();

    if (!updatesData.ok) return [];

    // Шаг 2: Фильтруем посты нужного канала
    const channelPosts = updatesData.result
      .filter(update => update.channel_post?.chat?.username === "NebulaFloww")
      .map(update => update.channel_post);

    // Шаг 3: Для каждого поста получаем file_path
    const postsWithMedia = await Promise.all(
      channelPosts.map(async (post) => {
        if (!post.photo) return null;

        // Берем фото максимального качества (последний элемент массива)
        const fileId = post.photo[post.photo.length - 1].file_id;

        // Получаем путь к файлу
        const fileResponse = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`
        );
        const fileData = await fileResponse.json();

        if (!fileData.ok) return null;

        return {
          id: post.message_id,
          title: post.caption || "Новость Nebula Flow",
          imageUrl: `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${fileData.result.file_path}`,
          telegramLink: `https://t.me/NebulaFloww/${post.message_id}`
        };
      })
    );

    return postsWithMedia.filter(post => post !== null);
  } catch (error) {
    console.error("Ошибка при загрузке новостей:", error);
    return [];
  }
}*/
const BOT_TOKEN = '7977103030:AAG61xk4yIPdBH3ho-7tQNrT8z5Uo80cMA4';

export const fetchPosts = async () => {
  try {
    // Шаг 1: Получаем updates
    const updatesResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=-10&limit=100`
    );
    const updatesData = await updatesResponse.json();

    if (!updatesData.ok) return [];

    // Шаг 2: Фильтруем посты нужного канала
    const channelPosts = updatesData.result
      .filter(update => update.channel_post?.chat?.username === "NebulaFloww")
      .map(update => update.channel_post);

    // Шаг 3: Для каждого поста получаем file_path
    const postsWithImages = await Promise.all(
      channelPosts.map(async (post) => {
        if (!post.photo) return null;

        // Берем фото максимального качества (последний элемент массива)
        const fileId = post.photo[post.photo.length - 1].file_id;

        // Получаем file_path
        const fileResponse = await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`
        );
        const fileData = await fileResponse.json();

        if (!fileData.ok) return null;

        return {
          id: post.message_id,
          title: post.caption || "Новость Nebula Flow",
          imageUrl: `https://api.telegram.org/file/bot${BOT_TOKEN}/${fileData.result.file_path}`,
          telegramLink: `https://t.me/NebulaFloww/${post.message_id}`
        };
      })
    );

    return postsWithImages.filter(post => post !== null);
  } catch (error) {
    console.error("Ошибка загрузки новостей:", error);
    return [];
  }
};