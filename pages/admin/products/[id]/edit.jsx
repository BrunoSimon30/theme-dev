"use client";
import AdminLayout from '@/components/admin/AdminLayout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Upload, X } from 'lucide-react';

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    fabric: 'Chiffon',
    category: 'Ready To Wear',
    inStock: true,
    bestSelling: false,
    hasOptions: true,
    sizes: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    if (id) {
      // Load product data
      const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
      const product = products.find(p => p.id === parseInt(id));
      
      if (product) {
        setFormData({
          name: product.name,
          price: product.price.toString(),
          description: product.description || '',
          fabric: product.fabric || 'Chiffon',
          category: product.category || 'Ready To Wear',
          inStock: product.inStock !== undefined ? product.inStock : true,
          bestSelling: product.bestSelling || false,
          hasOptions: product.hasOptions !== undefined ? product.hasOptions : true,
          sizes: product.sizes || [],
        });
        setImagePreviews(product.images || [product.image || '/img/product/p1.webp']);
      }
      setLoading(false);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews(prev => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSizeToggle = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
      const productIndex = products.findIndex(p => p.id === parseInt(id));

      if (productIndex !== -1) {
        products[productIndex] = {
          ...products[productIndex],
          name: formData.name,
          price: parseInt(formData.price),
          priceDisplay: `Rs. ${parseInt(formData.price).toLocaleString('en-PK', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`,
          image: imagePreviews[0] || products[productIndex].image,
          images: imagePreviews,
          description: formData.description,
          fabric: formData.fabric,
          category: formData.category,
          inStock: formData.inStock,
          bestSelling: formData.bestSelling,
          hasOptions: formData.hasOptions,
          sizes: formData.sizes,
        };

        localStorage.setItem('adminProducts', JSON.stringify(products));
        alert('Product updated successfully!');
        router.push('/admin/products');
      } else {
        alert('Product not found!');
      }
    } catch (error) {
      alert('Error updating product: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Loading...</div>
      </AdminLayout>
    );
  }

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const fabrics = ['Chiffon', 'Cotton', 'Silk', 'Georgette', 'Linen', 'CAMBRIC JACQUARD', 'COTTON JACQUARD'];
  const categories = ['Ready To Wear', 'Unstitched', 'Accessories', 'Sale'];

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Product</h1>
          <p className="text-gray-600">Update product information</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-8">
          {/* Product Images Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Product Images *
            </label>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  {index === 0 && (
                    <span className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                      Main
                    </span>
                  )}
                </div>
              ))}
              
              {imagePreviews.length < 8 && (
                <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Add Image</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <p className="text-sm text-gray-500">Upload up to 8 images. First image will be main image.</p>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              required
            />
          </div>

          {/* Price and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Price (PKR) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Available Sizes *
            </label>
            <div className="flex flex-wrap gap-3">
              {availableSizes.map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeToggle(size)}
                  className={`px-6 py-2 border-2 rounded transition-colors ${
                    formData.sizes.includes(size)
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Fabric */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Fabric
            </label>
            <select
              name="fabric"
              value={formData.fabric}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
            >
              {fabrics.map(fabric => (
                <option key={fabric} value={fabric}>{fabric}</option>
              ))}
            </select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleInputChange}
                className="w-5 h-5 text-gray-600 rounded border-gray-300"
              />
              <span className="text-gray-900">In Stock</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="bestSelling"
                checked={formData.bestSelling}
                onChange={handleInputChange}
                className="w-5 h-5 text-gray-600 rounded border-gray-300"
              />
              <span className="text-gray-900">Mark as Best Selling</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="hasOptions"
                checked={formData.hasOptions}
                onChange={handleInputChange}
                className="w-5 h-5 text-gray-600 rounded border-gray-300"
              />
              <span className="text-gray-900">Has Options</span>
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Update Product'}
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/products')}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}