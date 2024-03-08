const { prisma } = require('../prisma/prisma-client');

const LikeController = {
  likePost: async (req, res) => {
    const { postId } = req.body;
    const userId = req.user.userId;

    if (!postId) {
      return res.status(400).json({ error: 'Все поля должны быть заполнены' });
    }

    try {
      const existingLike = await prisma.like.findFirst({
        where: { postId, userId },
      });

      if (existingLike) {
        return res.status(400).json({ error: 'Вы уже поставили лайк на данный пост' });
      }

      const like = await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });

      res.json(like);
    } catch (error) {
      console.error('Error like post', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  unlikePost: async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    if (!id) {
      return res.status(400).json({ error: 'Вы уже поставили дизлайк на данный пост' });
    }

    try {
      const existingLike = await prisma.like.findFirst({
        where: {
          postId: id,
          userId,
        },
      });

      if (!existingLike) {
        return res.status(400).json({ error: 'Дизлайк нельзя поставить' });
      }

      const like = await prisma.like.deleteMany({
        where: { postId: id, userId },
      });

      res.json(like);
    } catch (error) {
      console.error('Error like post', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = LikeController;