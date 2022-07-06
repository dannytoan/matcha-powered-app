"""added product image url property

Revision ID: e5569be95f41
Revises: e51db6893fa3
Create Date: 2022-07-06 13:10:19.030034

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e5569be95f41'
down_revision = 'e51db6893fa3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('image_url', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'image_url')
    # ### end Alembic commands ###
