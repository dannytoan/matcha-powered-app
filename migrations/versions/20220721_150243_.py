"""empty message

Revision ID: c7cb3ca182cd
Revises: 05c834275988
Create Date: 2022-07-21 15:02:43.820503

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c7cb3ca182cd'
down_revision = '05c834275988'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('order_items', sa.Column('product_image_url', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('order_items', 'product_image_url')
    # ### end Alembic commands ###
