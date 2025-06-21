import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

const projects = [
  {
    id: 1,
    title: 'Reforestación Amazónica Premium',
    description:
      'Proyecto de conservación y reforestación en la selva amazónica brasileña con monitoreo satelital',
    location: 'Brasil',
    type: 'Forestación',
    price: 15,
    stock: 2500,
    impact: '2,500 tCO₂e disponibles',
    sdg: 'ODS 15',
    icon: 'tree',
    image: require('../assets/images/projects/amazon-reforestation.jpg'),
    certification: 'Verra VCS',
    vintage: '2024',
  },
  {
    id: 2,
    title: 'Energía Eólica Patagonia',
    description:
      'Parque eólico de 50MW que genera energía limpia en la región patagónica argentina',
    location: 'Argentina',
    type: 'Energía Renovable',
    price: 12,
    stock: 5000,
    impact: '5,000 tCO₂e disponibles',
    sdg: 'ODS 7',
    icon: 'wind',
    image: require('../assets/images/projects/wind-farm.jpg'),
    certification: 'Gold Standard',
    vintage: '2024',
  },
  {
    id: 3,
    title: 'Conservación de Humedales',
    description: 'Protección y restauración de ecosistemas de humedales en Colombia',
    location: 'Colombia',
    type: 'Conservación',
    price: 18,
    stock: 1800,
    impact: '1,800 tCO₂e disponibles',
    sdg: 'ODS 14',
    icon: 'droplet',
    image: require('../assets/images/projects/wetlands-conservation.jpg'),
    certification: 'CAR',
    vintage: '2024',
  },
]

export default function Marketplace() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.filterCard}>
        <View style={styles.filterHeader}>
          <Feather name="filter" size={16} style={styles.filterIcon} />
          <Text style={styles.filterTitle}>Filtros</Text>
        </View>

        <View style={styles.filters}>
          <View style={styles.searchWrapper}>
            <Feather name="search" size={16} color="#6b7280" style={styles.searchIcon} />
            <TextInput placeholder="Buscar proyectos..." style={styles.input} />
          </View>
          <TouchableOpacity style={styles.select}>
            <Text style={styles.selectText}>País</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.select}>
            <Text style={styles.selectText}>Tipo de Proyecto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.select}>
            <Text style={styles.selectText}>Precio</Text>
          </TouchableOpacity>
        </View>
      </View>

      {projects.map((project) => (
        <View key={project.id} style={styles.projectCard}>
          <View style={styles.imageWrapper}>
            <Image source={project.image} style={styles.projectImage} />
            <View style={[styles.badge, styles.badgeRight]}>
              <Text style={styles.badgeText}>{project.sdg}</Text>
            </View>
            <View style={[styles.badge, styles.badgeLeft]}> 
              <Text style={styles.badgeText}>{project.certification}</Text>
            </View>
          </View>
          <View style={styles.projectHeader}>
            <View style={styles.typeRow}>
              <Feather name={project.icon as any} size={16} color="#16a34a" />
              <Text style={styles.typeBadge}>{project.type}</Text>
            </View>
            <View style={styles.priceColumn}>
              <Text style={styles.price}>${project.price}</Text>
              <Text style={styles.priceSub}>por tCO₂e</Text>
            </View>
          </View>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
          <View style={styles.metaRow}>
            <View style={styles.locationRow}>
              <Feather name="map-pin" size={14} color="#6b7280" />
              <Text style={styles.locationText}>{project.location}</Text>
            </View>
            <Text style={styles.vintage}>Vintage: {project.vintage}</Text>
          </View>
          <View style={styles.stockRow}>
            <Text>Disponible:</Text>
            <Text style={styles.stock}>{project.stock.toLocaleString()} tCO₂e</Text>
          </View>
          <View style={styles.addRow}>
            <TextInput
              style={styles.qtyInput}
              placeholder="Cantidad (tCO₂e)"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.addButton}>
              <Feather name="shopping-cart" size={16} color="#fff" />
              <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.loadMore}>
        <Text style={styles.loadMoreText}>Cargar Más Proyectos</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  filterCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  filterIcon: {
    marginRight: 6,
  },
  filterTitle: {
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchWrapper: {
    position: 'relative',
    flexBasis: '100%',
    marginBottom: 8,
  },
  searchIcon: {
    position: 'absolute',
    left: 8,
    top: 12,
  },
  input: {
    height: 40,
    borderColor: '#e5e7eb',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 32,
    flex: 1,
  },
  select: {
    flexBasis: '30%',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    height: 40,
    marginBottom: 8,
    marginRight: 8,
  },
  selectText: {
    color: '#6b7280',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    paddingBottom: 16,
  },
  imageWrapper: {
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: 180,
  },
  badge: {
    position: 'absolute',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  badgeRight: {
    right: 8,
    top: 8,
    backgroundColor: '#16a34a',
  },
  badgeLeft: {
    left: 8,
    top: 8,
    backgroundColor: '#1e40af',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    alignItems: 'center',
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeBadge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    marginLeft: 4,
  },
  priceColumn: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  priceSub: {
    fontSize: 12,
    color: '#6b7280',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  projectDescription: {
    paddingHorizontal: 16,
    color: '#6b7280',
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#6b7280',
    fontSize: 12,
    marginLeft: 4,
  },
  vintage: {
    fontSize: 12,
    color: '#374151',
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  stock: {
    fontWeight: '600',
  },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  qtyInput: {
    flex: 1,
    height: 40,
    borderColor: '#e5e7eb',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16a34a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 4,
  },
  loadMore: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  loadMoreText: {
    fontSize: 16,
  },
})
